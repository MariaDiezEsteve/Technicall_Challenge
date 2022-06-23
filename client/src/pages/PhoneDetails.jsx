import React from 'react'
import { useEffect, useState } from 'react'
import { getAllPhonesDetails } from '../services/phones.services'
import { useNavigate, useParams} from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import Card from "react-bootstrap/Card"

function PhoneDetails() {

  const {id} = useParams()

  const [ details, setDetails ] = useState(null)

  const navigate = useNavigate()

  useEffect(()=> {
    getPhoneDetails()
  }, [])

  const getPhoneDetails = async () => {
    try {

      const response = await getAllPhonesDetails(id)
      setDetails(response.data)
       
    } catch (error) {
      navigate("/error")
    }
  }

  if(details === null){
    return <DotLoader />
  }
  return (
    <div>
      <h3>Details Phone</h3>

      <Card>
      
      <br />
      <Card.Img variant="top" scr={details.imageFileName} alt="imagenPhone" width={500} />
      <br />
       <Card.Body>
          <Card.Text>
              <p><strong>Name: </strong>Name:{details.name}</p> 
              <br />
              <p><strong>Manufacturer: </strong>{details.manufacturer}</p>
              <br />
              <p><strong>Description: </strong>{details.description}</p>
              <br />
              <p><strong>Color: </strong>{details.color}</p>
              <br />
              <p><strong>Price: </strong>{details.price}</p>
              <br />
              <p><strong>Screen:</strong>{details.screen}</p>
              <br />
              <p><strong>Ram: </strong>{details.ram}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PhoneDetails;

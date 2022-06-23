import React from 'react'
import { useEffect, useState } from 'react'
import { getAllPhonesDetails } from '../services/phones.services'
import { useNavigate, useParams} from 'react-router-dom'
import { DotLoader } from 'react-spinners'

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
      <br />
      <p>{details.name}</p>
      <br />
      <p>{details.manufacturer}</p>
      <br />
      <p>{details.description}</p>
      <br />
      <p>{details.color}</p>
      <br />
      <p>{details.price}</p>
      <br />
      <p>{details.imageFileName}</p>
      <br />
      <p>{details.screen}</p>
      <br />
      <p>{details.ram}</p>

    </div>
  );
}

export default PhoneDetails;

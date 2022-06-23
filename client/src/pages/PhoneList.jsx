import React from 'react'
import { useEffect, useState } from 'react'
import { getAllPhone } from '../services/phones.services'
import { NavLink, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import Card from "react-bootstrap/Card"

function PhoneList() {
    const [ allPhones, setAllPhones] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getAllPhones()

    }, []);

    const getAllPhones = async () => {
        try{
            const response = await getAllPhone()
            setAllPhones(response.data)

        }catch (error){
            navigate("/error")
        }
    }
    
  if (allPhones === null) {
    return <DotLoader />
  }

  return (
    <div>
        <h3>Phone List</h3>
        {
            allPhones.map((eachPhone) =>{
                return(
                    <div >
                        <Card>
                                <Card.Img variant="top"  scr={eachPhone.imageFileName} alt="imgPhone" width={500} />

                                <NavLink className="navlink" to={`/phones/${eachPhone._id}`}> {eachPhone.name}</NavLink>
                                <br />
                                <Card.Body>
                                    <Card.Text>
                                        <p><strong>Name: </strong>Name:{eachPhone.name}</p> 
                                        <br />
                                        <p><strong>Manufacturer: </strong>{eachPhone.manufacturer}</p>
                                        <br />
                                        <p><strong>Description: </strong>{eachPhone.description}</p>
                                        <br />
                                        <p><strong>Color: </strong>{eachPhone.color}</p>
                                        <br />
                                        <p><strong>Price: </strong>{eachPhone.price}</p>
                                        <br />
                                        <p><strong>Screen:</strong>{eachPhone.screen}</p>
                                        <br />
                                        <p><strong>Ram: </strong>{eachPhone.ram}</p>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PhoneList
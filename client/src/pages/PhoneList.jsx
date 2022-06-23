import React from 'react'
import { useEffect, useState } from 'react'
import { getAllPhone } from '../services/phones.services'
import { NavLink, useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'

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
                    <div>
                        <NavLink className="navlink" to={`/phones/${eachPhone._id}`}> <li>{eachPhone.name} </li></NavLink>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PhoneList
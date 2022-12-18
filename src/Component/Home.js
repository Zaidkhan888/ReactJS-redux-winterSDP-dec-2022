import React, { useContext , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/Login.css"

import FormContext from '../FormContext'


const Home = () => {


    const isLoggedin = localStorage.getItem("localAuthToken")
    const navigate = useNavigate()

    useEffect(() => {
      if(!isLoggedin){
        navigate("/login")
      }
    
      
    }, [])
    


    // const { loginData } = useContext(FormContext)
    // const { userName, email, password } = loginData
    return (
        // <div>

        //     {/* <h4>Email - {userName}</h4>
        //     <h4>Email - {email}</h4>
        //     <h4>Email - {password}</h4> */}


        // </div>

        isLoggedin ? <div className="homeContainer">
          <h4>  Home Page</h4>
        </div> : null
    )
}

export default Home

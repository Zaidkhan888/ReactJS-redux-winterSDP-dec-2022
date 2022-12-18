import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "../CSS/Login.css"

import FormContext from '../FormContext'


 const Login = (props) => {


    
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    const navigate = useNavigate()
    function onClick() {

        localStorage.setItem("localAuthToken", jwt)
        navigate("/")


    }




    return
    (
        <div className="loginContainer">
            <button onClick={onClick}></button>
        </div>
    )
    //     const{loginData , setLogindata , setIsloggedin } =useContext(FormContext)
    //     const{userName  , email , password} = loginData 

    //     function onSubmit(event){
    //         event.preventDefaut()
    //         setIsloggedin(true)

    //     }
    //     function onUserNameChange(event){
    //         upadateStateOnInputChange(event.target.value , "userName")

    //     }
    //     function onUserEmailChange(event){
    //         // console.log(event);
    //         upadateStateOnInputChange(event.target.value  , "email") 


    //     }
    //     function onUserPassswordChange(event){
    //         // console.log(event);
    //         upadateStateOnInputChange(event.target.value , "password")


    //     }

    //     function upadateStateOnInputChange(key , value){
    //         switch (key) {
    //             case "userName":
    //                 setLogindata((prevLoginData)=>({
    //                     ...prevLoginData ,
    //                     userName : value

    //                 }))
    //                 return
    //             case "password":
    //                 setLogindata((prevLoginData)=>({
    //                     ...prevLoginData ,
    //                     password : value

    //                 }))
    //                 return
    //             case "email":
    //                 setLogindata((prevLoginData)=>({
    //                     ...prevLoginData ,
    //                     email : value

    //                 }))
    //                 return



    //             default:
    //                 break;
    //         }


    //     }


    //   return (
    //     <div className='loginContainer' onSubmit={onSubmit} >
    //        <form action="">
    //        <input type="text" value={userName} required onChange={onUserNameChange} placeholder='Enter UserName' />
    //         <input type="email" value={email}  required onChange={onUserEmailChange} placeholder='Enter Email' />
    //         <input type="password" value={password} required onChange={onUserPassswordChange} placeholder='Enter password' />
    //         <button type='submit'  className="loginButton">Login</button>
    //        </form>

    // </div>
    //   )







}


export default Login ;
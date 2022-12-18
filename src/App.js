// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FormContext from './FormContext';
import { Login } from './Component/Login';
import { Register } from './Component/Register';
import Home  from './Component/Home';
import Main from './Main';
// import { Routes } from 'react-router-dom';


function App() {
//   const [loginData, setLogindata ] = useState({
//     userName:"" ,
//     email:"" ,
//     password :""
//   })
//   const [isLoggedin , setIsloggedin] = useState(false)
  return (
    // <FormContext.Provider value={{loginData  , setLogindata , setIsloggedin }} >
      

    // {  !isLoggedin ? <Login /> : <Home />   }
    // </FormContext.Provider>
   <>
   <Main />
   </>


  )
}

export default App;

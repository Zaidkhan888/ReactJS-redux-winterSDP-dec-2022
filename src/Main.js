import  React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Component/Home'
import { Register } from './Component/Register'
import { Login } from './Component/Login'

function Main() {
  return (
    // <div>Routes</div>
    <BrowserRouter>
            <Routes>
                {/* <Route  element={Login}  path ="/login" /> */}
                <Route  element={Register} path ="/register"/>
                <Route  element={Home} path ="/"/>

            </Routes>
    </BrowserRouter>
  )
}

export default Main
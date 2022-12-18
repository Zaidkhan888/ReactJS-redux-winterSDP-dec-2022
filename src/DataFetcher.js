// import React, { useEffect, useState } from "react"

// const defaultEndpoint = "https://reqres.in/api/users?page="

// function DataFetcher() {

//     const [user , setUsers] = useState([])
//     cosnt[isLoading, serIsLoading] = useState(true)
//     const pageRef = useRef(1)

//     useEffect(() => {
//       fetchUserData()
    
     
//     }, [])
//     function fetchUserData(params) {
//         fetch(`${defaultEndpoint}${pageRef.current}`)
//         .then((response)=>{
//             if(response.status === 200)
//             return resposne.json()
//         })
//         .then((users)=>{
//             const [data] = users
//             setUsers((prevUser)=>[...prevUser , ...data])
//         })
        
//         .catch((error)=>{
//             console.log(error);
//         })
        
//     }


//     if(!Loading){
//         <div className="loading">
//             <h4>Loading...</h4>
//         </div>

//     }
    

//     return null;
    
// }


// export default DataFetcher ;


import {useState, useRef, useEffect}  from 'react'
import UserInfo from './UserInfo'


const defaultEndpoint = "https://reqres.in/api/users?page="

export default function DataFetcher() {
    const [ users, setUsers ] = useState([])
    const pageRef = useRef(1)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetchUserData()
    }, [])

    function fetchUserData()
    {
        fetch(`${defaultEndpoint}${pageRef.current}`)
        .then((response) => {
            if(response.status == 200)
                return response.json()
        })
        .then((users) =>{
            const { data } = users 
            setUsers((prevUsers) => [...prevUsers, ...data])
            setIsLoading(false)
        })
        .catch((error) => {
            console.log("Error: " , error)
        })
        console.log(users)
    }
    
    if(isLoading){
       return  <div className='loader'>
            <h3>Is Loading</h3>
        </div>
    }
  return users.length ? users.map((user, index) => <UserInfo key={index} lastName={user["last_name"]} firstName={user["first_name"]} avatarUrl={user["avatar"]} />) : <div className='loader'> <h1>No Users Found </h1></div>
}
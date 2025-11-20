import React from 'react'
import { Link, useParams } from 'react-router-dom'


const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];



function Userdetails() {
  const {id}=useParams();

  const user = users.find((u)=> u.id === parseInt(id));

  return (
    <div>
      <h1 className='text-3xl text-center font-bold'><span className='text-4xl font-extrabold '>{user.name} </span>Details</h1>
    {user?(
        <div className='text-center py-6 '>
       <h1  className='text-2xl ' > <span className='space-x-1 font-medium text-blue-950'>Name: </span> {user.name}</h1>
          <h2> <span className='space-x-1 font-medium text-blue-950'>Email: </span> {user.email}</h2>
      </div>
     
     ):(
      
          <p>User not found</p>
  )}
      <div className='flex  justify-center mt-6'>
  <Link to='/users' className=' border px-7 py-2  inline-block bg-blue-500  text-white  rounded hover:bg-blue-700  font-semibold '>
  Back
  </Link>
      </div>
     
    
     
      </div>
   
  )
}

export default Userdetails

import { useState,useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function App() {

  //get data 
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users")
      console.log(users)
    }
    fetchUsers()
  },[])

  return (
    <div>
      <nav className='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>   
    </div>
  )
}

export default App

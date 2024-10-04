import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
   <div className="wrapper">
     <div className="container">
      <div className="box">
      <Link to={"/user"}>User</Link>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/"}>Home</Link>
      </div>
    </div>
   </div>
  )
}


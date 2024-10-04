import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const ProfialLayout = () => {

  return (
    <div className='profile_wrapper'>
      <div className="box_profile">
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/profile/chande-addres'}>ChangeAdders</Link>
        <Link to={'/profile/create-addres'}>CreateAddres</Link>
        <Link to={'/profile/change-profial'}>ChangeProfile</Link>
      </div>
      <div>
      <Outlet />
      </div>
    </div>
  )
}

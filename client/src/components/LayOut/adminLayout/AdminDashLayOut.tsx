import React from 'react'
import { SideNav } from '../../../pages'
import { Outlet } from 'react-router-dom'

const AdminDashLayOut = () => {
  return (
    <div className='flex'>
      <SideNav />
      <Outlet />
    </div>
  )
}

export default AdminDashLayOut
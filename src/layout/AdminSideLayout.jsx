import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import { Outlet } from 'react-router-dom'
Outlet

const AdminSideLayout = () => {
  return (
   <>
   <AdminHeader />
   <main>
    <Outlet />
   </main>
   <AdminFooter/>
   </>
  )
}

export default AdminSideLayout
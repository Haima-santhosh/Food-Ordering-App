import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import AdminFooter from '../components/AdminFooter';
import AdminSideBar from '../components/AdminSideBar';

const AdminSideLayout = () => {
  return (
    <>
      <AdminHeader />

      <div className="flex">
       
        <AdminSideBar />

       
        <main className="flex-grow p-6">
          <Outlet />
        </main>
      </div>

      <AdminFooter />
    </>
  );
};

export default AdminSideLayout;

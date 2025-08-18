import React from 'react'
import Adminsidebar from './Adminsidebar';
import Header from '../Guest/Header';

function AdminHome() {
  return (

    <div className="layout">
      <Adminsidebar />
      <div className="main-area">
        <Header />
        <div className="main-content">
          <h2><u>ADMIN</u></h2>
          <h3>WELCOME TO ADMIN PAGE</h3>
          <h4>Here you can manage the food items and orders</h4>
          <h4>Click on the above links to manage the food items and orders</h4>
        </div>
      </div>
    </div>

  );
}
export default AdminHome;
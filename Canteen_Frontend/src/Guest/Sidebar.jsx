import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Sidebar() {
  return (
       <div className="sidebar">
        <center>
            <h3 className="text-center text-light ">CANTEEN FOODIE</h3>
            <Link to='/' ><i className="fas fa-home me-2"></i>Home</Link>
            <Link to='/guestmenu' ><i className="fas fa-utensils me-2"></i>Menu</Link>
            <Link to='/guestorders' ><i className="fas fa-shopping-cart me-2"></i>My Orders</Link>
            <Link to='/guestprofile' ><i className="fas fa-user me-2"></i>Profile</Link>
            <Link to='/guestabout' ><i className="fas fa-info-circle me-2"></i>About</Link>
        </center>
    </div>
   
  )
}

export default Sidebar

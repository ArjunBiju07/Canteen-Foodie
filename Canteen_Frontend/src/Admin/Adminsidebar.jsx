import React from 'react'
import { Link } from 'react-router-dom'
function Adminsidebar() {
    return (
        <div className="sidebar">
            <center>
                <h3 className="text-center text-light">CANTEEN FOODIE</h3>

                <Link to='/adminhome'>
                    <i className="fas fa-house me-2"></i>Home
                </Link>

                <Link to='/adminbreakfast'>
                    <i className="fas fa-mug-hot me-2"></i>Breakfast
                </Link>

                <Link to='/adminlunch'>
                    <i className="fas fa-drumstick-bite me-2"></i>Lunch
                </Link>

                <Link to='/adminevening'>
                    <i className="fas fa-cookie-bite me-2"></i>Evening
                </Link>

                <Link to='/adminallorders'>
                    <i className="fas fa-receipt me-2"></i>Orders
                </Link>
            </center>

        </div>
    )
}

export default Adminsidebar

import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';

function Guestabout() {
  return ( 
      <div className="layout">
        <Sidebar />
        <div className="main-area">
          <Header />
          <div className="main-content">
            <h2><u>ABOUT</u></h2>

            <p>Developed by: <b>Team 1</b></p>
          </div>
        </div>
      </div> 
  )
}

export default Guestabout

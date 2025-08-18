import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Guesthome() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="main-content">
          <h2>Welcome to CANTEEN FOODIE</h2>
          <p>Enjoy delicious and affordable meals at your college canteen.</p>
          <a href="/adminhome">Adminpage</a>
        </div>
      </div>
    </div>
  );
}

export default Guesthome;

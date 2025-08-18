import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';

function Guestorders() {
  return (
    //  <div>
    //   <Header />
    //   <Sidebar />

    //       {/* <center>
    //           <div className="container">
    //               <h3>My Orders</h3>
    //               <br/><br/>

    //               <h4>Breakfast</h4>

    //               <table className="table table-bordered">
    //                   <thead>
    //                       <tr>
    //                           <th>Food</th>
    //                           <th>Quantity</th>
    //                           <th>Order Time</th>
    //                           <th>Action</th>
    //                       </tr>
    //                   </thead>
    //                   <tbody>             

    //                   </tbody>
    //               </table>


    //               <h4>Lunch</h4>
    //               <table className="table table-bordered">
    //                   <thead>
    //                       <tr>
    //                           <th>Food</th>
    //                           <th>Quantity</th>
    //                           <th>Order Time</th>
    //                           <th>Action</th>
    //                       </tr>
    //                   </thead>
    //                   <tbody>

    //                   </tbody>
    //               </table>


    //               <h4>Evening</h4>
    //               <table className="table table-bordered">
    //                   <thead>
    //                       <tr>
    //                           <th>Food</th>
    //                           <th>Quantity</th>
    //                           <th>Order Time</th>
    //                           <th>Action</th>
    //                       </tr>
    //                   </thead>
    //                   <tbody>

    //                   </tbody>
    //               </table>
    //           </div>
    //       </center> */}
    //   </div>

    <div className="layout">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="main-content">
          <div className="container">
            <h3>My Orders</h3>
            <br /><br />

            <h4>Breakfast</h4>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Quantity</th>
                  <th>Order Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>


            <h4>Lunch</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Quantity</th>
                  <th>Order Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>


            <h4>Evening</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Quantity</th>
                  <th>Order Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guestorders

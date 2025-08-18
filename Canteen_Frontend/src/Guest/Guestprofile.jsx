import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';

function Guestprofile() {
  return (
    //     <div>
    //       <Header />
    //       <Sidebar />
    //     {/* <br />
    //     <center>
    //     <h3>Profile</h3>

    //     <div className="profile-container card p-4 bg-white shadow-sm" >

    //             <div className="text-center mb-3">

    //                 <h2 className="mt-3">here is the Name from backend </h2>
    //                 <p className="text-muted">Email: </p>
    //             </div>
    //             <div className="d-grid gap-2">
    //                 <a href="editpage.php" className="btn btn-primary"><i className="fas fa-edit"></i> Edit Profile</a>
    //                 <a href="?url=logout" className="btn btn-danger"><i className="fas fa-sign-out-alt"></i> Logout</a>
    //             </div>

    //             <p className="text-muted">You are not logged in.</p>
    //             <div className="d-grid gap-2">
    //                 <a href="?url=login" className="btn btn-success"><i className="fas fa-sign-in-alt"></i> Login Now</a>
    //                 <a href="?url=register" className="btn btn-primary"><i className="fas fa-user-plus"></i> Register Now</a>
    //             </div>
    //     </div>
    // </center> */}

    // </div>


    <div className="layout">
      <Sidebar />
      <div className="main-area">
        <Header />
        <div className="main-content">
          <h3>Profile</h3>

          <div className="profile-container card p-4 bg-white shadow-sm" >

            <div className="text-center mb-3">

              <h2 className="mt-3">here is the Name from backend </h2>
              <p className="text-muted">Email: </p>
            </div>
            <div className="d-grid gap-2">
              <a href="editpage.php" className="btn btn-primary"><i className="fas fa-edit"></i> Edit Profile</a>
              <a href="?url=logout" className="btn btn-danger"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </div>

            <p className="text-muted">You are not logged in.</p>
            <div className="d-grid gap-2">
              <a href="?url=login" className="btn btn-success"><i className="fas fa-sign-in-alt"></i> Login Now</a>
              <a href="?url=register" className="btn btn-primary"><i className="fas fa-user-plus"></i> Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guestprofile

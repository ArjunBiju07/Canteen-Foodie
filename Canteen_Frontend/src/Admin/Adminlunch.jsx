import React from 'react';
import Adminsidebar from './Adminsidebar';
import Header from '../Guest/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Adminlunch() {

  const [food, setFood] = useState('');
  const [price, setPrice] = useState('');
  const [lunchitems, setLunchitems] = useState([]);
  const navigate = useNavigate();

  const insertLunch = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/insertlunch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ food, price })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Result", data);
        alert(food + " added");
        navigate(0);
        setFood('');
        setPrice('');
      })
      .catch(error => {
        console.log("Error", error)
      })
  }

  useEffect(()=>{
    fetch('http://localhost:3000/getlunch')
      .then(response => response.json())
      .then(data=>{
        setLunchitems(data)
      })
      .catch(error=>{
        console.error("Error fetching lunch items:",error);
      })
  },[])
  return (
    <div className="layout">
      <Adminsidebar />
      <div className="main-area">
        <Header />
        <div className="main-content p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>🍽️Lunch</h2>
            <button
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#addOrderModal"
            >
              + Add Lunch
            </button>
          </div>

          <table className="table table-hover table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Food</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {lunchitems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.food}</td>
                  <td>₹{item.price}</td>
                  <td><button className="btn btn-success btn-sm">Update</button></td>
                  <td><button className="btn btn-danger btn-sm">Delete</button></td>

                </tr>
              ))

              }

              {/* <tr>
                <td>1</td>
                <td>Idli</td>
                <td>₹30</td>
                <td><button className="btn btn-success btn-sm">Update</button></td>
                <td><button className="btn btn-danger btn-sm">Delete</button></td>
              </tr> */}
              {/* Add more rows dynamically here */}
            </tbody>
          </table>

          {/* Modal */}
          <div
            className="modal fade"
            id="addOrderModal"
            tabIndex="-1"
            aria-labelledby="addOrderLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={insertLunch}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="addOrderLabel">Add New Lunch</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Food</label>
                      <input
                        type="text"
                        className="form-control"
                        name="food"
                        required
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Add Order"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <a href="/adminhome" className="btn btn-link mt-3">Go back</a>
        </div>
      </div>
    </div>
  )
}

export default Adminlunch

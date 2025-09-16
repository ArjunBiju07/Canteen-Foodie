import React from 'react'
import Adminsidebar from './Adminsidebar';
import Header from '../Guest/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Adminevening() {

  const [food, setFood] = useState('');
  const [price, setPrice] = useState('');
  const [eveingitems, setEveningitems] = useState([]);
  const navigate = useNavigate();

  const insertEvening = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/insertevening', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ food, price })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Result:", data)
        alert(food + " added");
        navigate(0);
        setFood('');
        setPrice('');
      })
      .catch(error => {
        console.error("Error", error);

      })
  }

  useEffect(() => {
    fetch('http://localhost:3000/getevening')
      .then(response => response.json())
      .then(data => {
        setEveningitems(data);
      })
      .catch(error => {
        console.error("Error while fetching,useEffect", error)
      })
  }, [])

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if(confirmDelete){
      fetch('http://localhost:3000/delevening',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({del_id : id})
      })
      .then(response=>{
        if(response.ok){
          setEveningitems(eveingitems.filter(i => i.id !== id));
        }
        else{
          alert("Delete failed.please try again");
        }
      })
      .catch(err => {
        console.error("Error while deleting,F",err);
      })
    }

  }

  return (
    <div className="layout">
      <Adminsidebar />
      <div className="main-area">
        <Header />
        <div className="main-content p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>🍽️ Evening Snacks</h2>
            <button
              className="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#addOrderModal"
            >
              + Add Evening Snacks
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
              {
                eveingitems.map((items, index) => (
                  <tr key={index}>
                    <td>{index+=1}</td>
                    <td>{items.food}</td>
                    <td>{items.price}</td>
                    <td><button className="btn btn-success btn-sm">Update</button></td>
                    <td><button className="btn btn-danger btn-sm"
                    onClick={()=>handleDelete(items.id)}>Delete</button></td>
                  </tr>

                ))
              }
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
                <form onSubmit={insertEvening}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="addOrderLabel">Add New Evening Snacks</h5>
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
                        onChange={e => setPrice(e.target.value)}
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
                      value="Add List"
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

export default Adminevening

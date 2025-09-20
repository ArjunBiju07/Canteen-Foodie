import React from 'react';
import Adminsidebar from './Adminsidebar';
import Header from '../Guest/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

function Admineditbreak() {

    const { id } = useParams();
    const [food, setFood] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/showeditbreak/${id}`)
            .then(res => res.json())
            .then(data => {
                setFood(data.food);
                setPrice(data.price);
            })
            .catch(err => {
                console.error("Error fetching table for update", err)
            })
    }, [id])

    const handleEdit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/updatebreak", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({food,price,id}),
        })
        .then(res=>{
            if(res.ok){
                alert("Successfully updated breakfast");
                navigate('/adminbreakfast');
            }
            else{
                alert("Failed to update breakfast");
            }
        })
        .catch(err=>{
            console.error("Error while updating,F");
        })
        
    }
    return (
        <div className="d-flex layout">
            <Adminsidebar />
            <div className="flex-grow-1 main-area">
                <Header />
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h2 className="card-title mb-4 text-center">Edit Food Item</h2>
                                    <form onSubmit={handleEdit}>
                                        <div className="mb-3">
                                            <label htmlFor="food" className="form-label">Food Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter food name"
                                                value={food}
                                                onChange={(e) => setFood(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter price"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary w-100">
                                            Update
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admineditbreak;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css';
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';


const Order = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pickup: '',
        destination: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='background'>
        <div className="order-container containerOr">
            <h2 style={{fontSize:'40px'}} className="text-center">Place Order</h2>
            <br></br>
            <form onSubmit={handleSubmit} className="order-form">
                <div className="form-group">
                    <label htmlFor="name" style={{fontSize:'20px'}} className="control-label">Name :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" style={{fontSize:'20px'}} className="control-label">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" style={{fontSize:'20px'}} className="control-label">Phone :</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pickup" style={{fontSize:'20px'}} className="control-label">Pick Up :</label>
                    <input
                        type="text"
                        id="pickup"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="destination" style={{fontSize:'20px'}} className="control-label">Destination :</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                    <a href="/customer-home" className="btn btn-success ml-2">Back to Home</a>
                </div>
            </form>
        </div>
        <IoArrowBackCircle style={{color:'white',fontSize:'50px'}}
          className="back-icon" 
          onClick={() => navigate(-1)} 
          title="Go Back"
        />
        </div>
    );
};

export default Order;
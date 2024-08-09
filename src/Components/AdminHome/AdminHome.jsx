import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHome.css';
import AdminNav from '../AdminNav/AdminNav';
import Footer from '../Footer/Footer';

const AdminHome = () => {
  return (
    <div>
      <AdminNav/>
    
    <div className="admin-container">
      <div className="admin-header">
        <img src={`${process.env.PUBLIC_URL}/images/admin.jpeg`} alt="Admin" className="admin-img" />
        <h1>Admin Portal</h1>
      </div>
      <div className="admin-portal">
        <div className="admin-section">
          <h2>Check Users</h2>
          <p>View and manage registered users.</p>
          <a href="/getusers" className="btn btn-primary">Go to Users</a>
        </div>
        <div className="admin-section">
          <h2>Check Orders</h2>
          <p>View and manage customer orders.</p>
          <a href="/getorders" className="btn btn-primary">Go to Orders</a>
        </div>
        <div className="admin-section">
          <h2>Check Queries</h2>
          <p>View and respond to customer queries.</p>
          <a href="/getqueries" className="btn btn-primary">Go to Queries</a>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AdminHome;

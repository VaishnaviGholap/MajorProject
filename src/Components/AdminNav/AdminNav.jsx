import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminNav.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminNav = () => {
    return (
      <div>
        <nav className="admin-navbar">
          <div className="logo">
            
            { <img src='./Images/ninjalogo2.gif' alt="ticket" />}
            <span className="logo-text" style={{fontFamily:'cursive',color:'black'}}>NinjaCourier</span>
          </div>
           
    <div className='nav-links'>
      
            <li><Link to="/adminhome">Home</Link></li>
            <li><Link to="/getorders">Get Order</Link></li>
            <li><Link to="/getusers">Get Users</Link></li>
            <li><Link to="/getqueries">Get Queries</Link></li>
           

    </div>
    <div className='logout'>
          <Link to="/role-select">LogOut</Link>
    </div>
        </nav>
      </div>
    );
  }
  
  export default AdminNav;
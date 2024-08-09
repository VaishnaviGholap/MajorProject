import React from 'react';
import { Link } from 'react-router-dom';
import "./AgentNav.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const AgentNav = () => {
    return (
      <div>
        <nav className="Agent-navbar">
          <div className="logo">
            
            { <img src='./Images/ninjalogo2.gif' alt="ticket" />}
            <span className="logo-text" style={{fontFamily:'cursive',color:'black'}}>NinjaCourier</span>
          </div>
           
    <div className='nav-links'>
      
         
 
 
            <li><Link to="/agenthome">Home</Link></li>
            <li><Link to="/agentorders">View Order</Link></li>
            <li><Link to="/agentcontact">Contact Us</Link></li>
            <li><Link to="/agentabout">About Us</Link></li> 

    </div>
    <div className='logout'>
          <Link to="/role-select">LogOut</Link>
    </div>
        </nav>
      </div>
    );
  }
  
  export default AgentNav;
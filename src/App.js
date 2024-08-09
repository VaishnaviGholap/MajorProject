import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Enter from './Components/Enter/Enter'; 
import RoleSelect from './Components/RoleSelect/RoleSelect';
import Customer from './Components/Customer/Customer';
import Agent from './Components/Agent/Agent';
import Admin from './Components/Admin/Admin';
import CustomerHome from './Components/CustomerHome/CustomerHome';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Order from './Components/Order/Order';
import TrackOrder from './Components/Trackorder/TrackOrder';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Distance from './Components/Distance/Distance';
import AgentHome from './Components/AgentHome/AgentHome';
import AgentNav from './Components/AgentNav/AgentNav'; 
import AgentContact from './Components/AgentContact/AgentContact';
import AgentAbout from './Components/AgentAbout/AgentAbout';
import AdminHome from './Components/AdminHome/AdminHome';
import GetOrders from './Components/GetOrders/GetOrder';
import GetQueries from './Components/GetQueries/GetQueries';
import GetUsers from './Components/GetUsers/GetUsers';
import AgentOrders from './Components/AgentOrders/AgentOrders';



function App() {
  return (
    <Router>
      <Routes>
          
      <Route path="/" element={<Enter />} />
      <Route path="/role-select" element={<RoleSelect />} />    
      <Route path="/customer" element={<Customer />} /> 
      <Route path="/agent" element={<Agent />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/customer-home" element={<CustomerHome />} /> 
      <Route path="/navbar" element={<Navbar/>} /> 
      <Route path="/footer" element={<Footer/>} /> 
      <Route path="/order" element={<Order />} />
      <Route path="/track-order" element={<TrackOrder />} /> 
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />  
      <Route path="/distance" element={<Distance />} />
      <Route path="/agenthome" element={<AgentHome />} /> 
      <Route path="/agentnav" element={<AgentNav />} /> 
      <Route path="/agentcontact" element={<AgentContact />} /> 
      <Route path="/agentabout" element={<AgentAbout />} /> 
      <Route path="/adminhome" element={<AdminHome />} /> 
      <Route path="/getorders" element={<GetOrders />} />
      <Route path="/getqueries" element={<GetQueries />} />
      <Route path="/getusers" element={<GetUsers />} />
      <Route path="/agentorders" element={<AgentOrders />} />




        
      </Routes>
    </Router>
  );
}

export default App;


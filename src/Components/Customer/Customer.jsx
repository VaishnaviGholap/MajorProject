
import React, { useState } from 'react';
import './Customer.css'; 
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
import { UserLogin } from '../../APICallFunction/UserFunction';

function Customer() {
  const [isLogin, setIsLogin] = useState(true);
  const [erre, setErr] = useState('');
  const [formData, setFormData] = useState({
    // name: '',
    username: '',
    // email: '',
    password: '',
    // phone: '',
    // rememberMe: false,
  });

 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);

  //   navigate('/customer-home');
  // };

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        console.log(formData);
        const res = await UserLogin(formData);
        console.log(res);
        if (res.status === 200) {
            //res.data.msg
            setErr('');
            //storeToken(res.data.token);
            navigate('/customer-home');
        }
    } catch (error) {
        console.log(error);
        if (error.response.status === 400) {
            setErr(error.response.data.msg);
        }
    }
}
 
 
  return (
    <div className='containerC'>
      <div className="customer-auth">
        <h2>{isLogin ? 'Customer Login' : 'Customer Signup'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label>Name:</label>
              <input type="text" name="name" onChange={handleChange} required />
              <label>Email:</label>
              <input type="email" name="email" onChange={handleChange} required />
              <label>Phone:</label>
              <input type="tel" name="phone" onChange={handleChange} required />
            </>
          )}
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChange} required />
          <label>Password:</label>
          <input type="password"  name="password" onChange={handleChange} required />
          {isLogin && (
            <div className="remember-me">
              <input 
                type="checkbox" 
                name="rememberMe" 
                checked={formData.rememberMe} 
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Signup' : 'Login'}
        </button>
      </div>
        <IoArrowBackCircle style={{color:'white',fontSize:'50px'}}
          className="back-icon" 
          onClick={() => navigate(-1)} 
          title="Go Back"
        />
    </div>
  );
}

export default Customer;


;

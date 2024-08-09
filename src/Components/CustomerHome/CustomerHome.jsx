import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CustomerHome.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const CustomerHome = () => {
  
  const dataList = [
    {
      id: 51,
      name: 'Sunset Express Shipping',
      ratings: 4.4,
      address: '567 Sunset Street, Sunsetview Town, USA',
      phone: '+1-855-369-2580',
       imgUrl: '/Images/1.jpg'
    },
    {
      id: 52,
      name: 'Moonbeam Logistics',
      ratings: 4.1,
      address: '789 Moonbeam Avenue, Moonbeam Town, USA',
      phone: '+1-888-789-4567',
        imgUrl: '/Images/2.jpg'
    },
    {
      id: 53,
      name: 'Stellar Express Solutions',
      ratings: 4.5,
      address: '101 Stellar Lane, Stellar City, USA',
      phone: '+1-877-101-2020',
      imgUrl: '/Images/3.jpg'
    },

      {
          "id": 54,
          "name": "Galactic Freight Services",
          "ratings": 4.3,
          "address": "303 Galactic Drive, Galaxy Town, USA",
          "phone": "+1-844-303-7070",
          "imgUrl": "/Images/5.jpg"
      },
      {
          "id": 55,
          "name": "Aurora Shipping Co.",
          "ratings": 4.2,
          "address": "505 Aurora Road, Aurora City, USA",
          "phone": "+1-855-505-7070",
          "imgUrl": "/Images/10.jpg"
      },
      {
          "id": 56,
          "name": "Nebula Transport",
          "ratings": 4.6,
          "address": "707 Nebula Street, Nebula Town, USA",
          "phone": "+1-866-707-9090",
          "imgUrl": "/Images/1.jpg"
      },
      {
          "id": 57,
          "name": "Cosmic Cargo Solutions",
          "ratings": 4.4,
          "address": "909 Cosmic Lane, Cosmo City, USA",
          "phone": "+1-877-909-1010",
          "imgUrl": "/Images/2.jpg"
      },
      {
          "id": 58,
          "name": "Eclipse Express",
          "ratings": 4.5,
          "address": "121 Eclipse Blvd, Eclipse Town, USA",
          "phone": "+1-888-121-2020",
          "imgUrl": "/Images/3.jpg"
      },
      {
          "id": 59,
          "name": "Celestial Freight",
          "ratings": 4.3,
          "address": "343 Celestial Road, Celestial City, USA",
          "phone": "+1-844-343-3030",
          "imgUrl": "/Images/5.jpg"
      },
      {
          "id": 60,
          "name": "Orbit Logistics",
          "ratings": 4.2,
          "address": "565 Orbit Street, Orbit Town, USA",
          "phone": "+1-855-565-4040",
          "imgUrl": "/Images/10.jpg"
      },
      {
          "id": 61,
          "name": "Lunar Express Services",
          "ratings": 4.4,
          "address": "787 Lunar Avenue, Lunar City, USA",
          "phone": "+1-866-787-5050",
          "imgUrl": "/Images/1.jpg"
      },
  
      {
        "id": 62,
        "name": "Pioneer Shipping Solutions",
        "ratings": 4.3,
        "address": "999 Pioneer Street, Pioneer Town, USA",
        "phone": "+1-877-999-6060",
        "imgUrl": "/Images/2.jpg"
    }
    

  ];

  return (
    <div>
      <Navbar />
    <div className="container mt-4">
      <div className="row">
        {dataList.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card" style={{ width: '20rem' }}>
              <img className="card-img-top" src={item.imgUrl} alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Company: {item.name}</h5>
                <p className="card-text">Address: {item.address}</p>
                <p className="card-text">Ratings: {item.ratings}/5</p>
                <p className="card-text">Call: {item.phone}</p>
                <a href={`/trackCourier/${item.id}`} className="btn btn-primary">View Profile</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default CustomerHome;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './AgentHome.module.css'; 
import AgentNav from '../AgentNav/AgentNav';
import Footer from '../Footer/Footer';

const AgentHome = () => {
  const dataList = [
    {
      id: 51,
      name: 'Vector Express Shipping',
      ratings: 4.4,
      address: '567 Sunset Street, Sunsetview Town, USA',
      phone: '+1-855-369-2580',
      imgUrl: '/Images/agent1.jpg'
    }
  ];

  return (
    <div>
      <AgentNav/>
   
    <div className={styles.agentContainer + ' mt-4'}>
      <div><h1 className={styles.agentTitle + ' text-center mb-4'}>YOUR PROFILE</h1></div>
      <div className="row justify-content-center">
        {dataList.map((item) => (
          <div className="col-12 mb-4" key={item.id}>
            <div className={styles.agentDetailsCard}>
              <img className={styles.agentDetailsImg} src={item.imgUrl} alt="Card" />
              <div className={styles.agentDetailsBody}>
                <h5 className={styles.agentDetailsTitle}>Company: {item.name}</h5>
                <p className={styles.agentDetailsText}>Address: {item.address}</p>
                <p className={styles.agentDetailsText}>Ratings: {item.ratings}/5</p>
                <p className={styles.agentDetailsText}>Call: {item.phone}</p>
                <a href={`/trackCourier/${item.id}`} className="btn btn-primary">View Orders</a>
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

export default AgentHome;


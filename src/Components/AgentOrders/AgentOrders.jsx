import React, { useEffect, useState } from 'react';
import './AgentOrders.css';
import AgentNav from '../AgentNav/AgentNav';

const AgentOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from an API
        fetch('/api/orders')
            .then(response => response.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div>
            <AgentNav/>
    
        <div className="agentOrdersContainer">
            <h2>Orders</h2><br></br>
            <table className="agentOrdersTable">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Tracking ID</th>
                        <th>Pick-Up</th>
                        <th>Delivery</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AgentOrders;

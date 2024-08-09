import React, { useEffect, useState } from 'react';
import './GetUsers.css';
import AdminNav from '../AdminNav/AdminNav';


const GetUsers = () => {

    

    const [users, setUsers] = useState([]);

    useEffect(() => {
      
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <AdminNav/>
     
        <div className="getUsersContainer">
            <h2>Users</h2>
            <br></br>
            <table className="getUsersTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
       
        </div>
    );
};

export default GetUsers;

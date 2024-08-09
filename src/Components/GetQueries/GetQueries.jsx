import React, { useEffect, useState } from 'react';
import './GetQueries.css';
import AdminNav from '../AdminNav/AdminNav';


const GetQueries = () => {

  
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        // Fetch queries from an API
        fetch('/api/queries')
            .then(response => response.json())
            .then(data => setQueries(data));
    }, []);

    return (
        <div>
             <AdminNav/> 
       
        <div className="getQueriesContainer">
            <h2>Queries</h2>
            <br></br>
            <table className="getQueriesTable">
                <thead>
                    <tr>
                        <th>Query ID</th>
                        <th>Subject</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {queries.map(query => (
                        <tr key={query.id}>
                            <td>{query.id}</td>
                            <td>{query.subject}</td>
                            <td>{query.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default GetQueries;

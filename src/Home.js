import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

const Home = () => {
    const [data,setData] = useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:5000/')
        .then(res =>{
            console.log(res.data);
            setData(res.data);
        })
        .catch(err => console.log(err));
    },[]);

    const navigate= useNavigate();

    const handleDelete = (id) => {
        
        axios.delete('http://localhost:5000/delete/' + id)
        .then(res =>{
            navigate("/")
            })
        .catch(err => console.log(err));

    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
        <div className='bg-white rounded w-70'>
            <h1 className='d-flex justify-content-center align-items-center'>Students Record</h1>
        <Link to="/create" className='btn btn-success m-2'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d , i) => (
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className='btn btn-primary'>Update</Link>
                                    <button onClick = {e => handleDelete(d.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default Home

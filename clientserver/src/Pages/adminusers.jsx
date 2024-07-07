import React, { useEffect, useState } from 'react';
import './adminuser.css'
import { Link } from 'react-router-dom';

export default function Adminusers() {
  const [tokens, settokens] = useState('');
  const [data, setData] = useState([]);

  const getuserdata = async () => {
    try {
      const respoce = await fetch("http://localhost:3000/api/router/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      });
      const data = await respoce.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const usetoken = localStorage.getItem('token');
    settokens(usetoken);
  }, []);

  useEffect(() => {
    if (tokens) {
      getuserdata();
    } else {
      console.log('Token not available');
    }
  }, [tokens]);

  const hndldelete = async (id) => {
    try {
      const respoce = await fetch(`http://localhost:3000/api/router/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
      });
      const data = await respoce.json();
      console.log(`delete ${data}`)
      if (respoce.ok) {
        getuserdata()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <section className='admin'>
        <div className='containerx'>
          <div className='containery admin-user'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((v, i) => {
                  return <tr key={i}>
                    <td>{v.username}</td>
                    <td>{v.email}</td>
                    <td>{v.phone}</td>
                    <td> <Link to={`/admin/users/${v._id}/edit`}>Edit</Link></td>
                    <td onClick={() => hndldelete(v._id)}>Delete</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
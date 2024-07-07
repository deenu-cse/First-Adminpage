import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css'

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
    window.location.reload()
  };

  return (
    <>
      <div className='logout'>
        <h2>Logout</h2>
        <h4>Thank you for using our services.</h4>
        <p>You have been successfully logged out. If you need to access your account again, please log in using your credentials.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
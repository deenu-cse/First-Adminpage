
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import admin from '../../images/admin.png'
import './admin.css'


export default function Adminlayout() {
    return (
        <>
            <header>
                <div className='container'>
                    <nav>
                        <ul className='flex'>
                            <li> <NavLink to="/admin/users">Users</NavLink></li>
                            <li> <NavLink to="/service">Service</NavLink></li>
                            <li><NavLink to="/">Home</NavLink></li>
                        </ul>
                    </nav>
                    {location.pathname === '/admin' && (
                        <div className='box'>
                            <div className='welcom'>
                                <h2>Welcome, Admin!</h2>
                                <p>We are thrilled to have you on board! As an administrator, you play a vital role in ensuring the smooth operation of our system. Your dedication and expertise will help us achieve our goals and provide an exceptional experience for our users.
                                    In this role, you will have access to a range of powerful tools and features that will enable you to manage and customize our system to meet your needs. Our team is committed to providing you with the support and resources you need to succeed.</p>
                                <br />
                                <h2>Getting Started</h2>
                                <br />
                                <p>To get started, we recommend exploring our system's features and familiarizing yourself with our user interface. You can find helpful resources and guides in our documentation section.
                                    <br />
                                    Thank you again for joining us! We look forward to working with you.
                                    <br /><br />
                                    Best regards, Deendayal</p>
                            </div>
                            <div className='img'>
                                <img src={admin} />
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <Outlet />
        </>
    )
}

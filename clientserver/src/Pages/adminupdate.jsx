import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Adminupdate() {
    const [tokens, settokens] = useState('');
    const [data, setData] = useState([]);
    const params = useParams()
    // console.log(params)
    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setuser({ ...user, [name]: value })
    }

    const getupdate = async () => {
        try {
            const respoce = await fetch(`http://localhost:3000/api/admin/users/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${tokens}`,
                },
            });
            const data = await respoce.json();
            setuser({
                ...user,
                [name]: value,
            })
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const usetoken = localStorage.getItem('token');
        settokens(usetoken);
    }, []);

    useEffect(() => {
        getupdate()
    }, [tokens])

    const hndlform = async (e) => {
        e.preventDefault()
        try {
            const respoce = await fetch(`http://localhost:3000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokens}`,
                },
                body: JSON.stringify(user),
            });
            alert("Updated successfully")
            const data = await respoce.json();
            if (respoce.ok) {
                getupdate()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Update user data</h1>
                                <br />
                                <form onSubmit={hndlform}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="username"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="email"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Update Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

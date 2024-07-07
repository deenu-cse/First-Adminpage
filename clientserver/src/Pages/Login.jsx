import React, { useState } from 'react'
import login from '../images/login.png'
import { useNavigate } from 'react-router-dom'
// import { useauth } from '../Store/Authstor'
import { toast } from 'react-toastify';
import './Login.css'

export default function Login() {


    const navigate = useNavigate()

    // const { storinlocal } = useauth()

    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setuser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const responce = await fetch(`http://localhost:3000/api/router/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            const resdata = await responce.json()
            console.log('responce data', resdata)
            if (responce.ok) {
                // storinlocal(resdata.token)
                localStorage.setItem('token', resdata.token)
                setuser({
                    email: "",
                    password: ""
                })
                navigate('/')
                window.location.reload()
            } else {
                alert(JSON.stringify(resdata.msg))
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
                            <div className="registration-image reg-img">
                                <img
                                    src={login}
                                    alt="a nurse with a cute look"
                                    width="400"
                                    height="500"
                                />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            placeholder="email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInput}
                                            placeholder="password"
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Login Now
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

import React, { useState } from 'react'
import reg from '../images/register.png'
import '../index.css'
import { useNavigate } from 'react-router-dom'
// import { useauth } from '../Store/Authstor'


export default function Register() {

    const navigate = useNavigate()

    // const {storinlocal} = useauth()

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

    const hndlform = async (e) => {
        e.preventDefault()
        try {
            const responce = await fetch(`http://localhost:3000/api/router/reg`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            const resdata = await responce.json()
            console.log(resdata)
            if (responce.ok) {
                // storinlocal(resdata.token)
                localStorage.setItem('token', resdata.token)
                setuser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                navigate('/login')
            } else {
                alert(JSON.stringify(resdata.msg))
            }
            console.log(responce)
        } catch (error) {
            console.log('register', error)
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
                                    src={reg}
                                    alt="a nurse with a cute look"
                                    width="400"
                                    height="500"
                                />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registration form</h1>
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
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Register Now
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

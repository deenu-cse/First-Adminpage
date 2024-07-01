import React, { useState } from 'react'
import reg from '../images/register.png'

export default function Register() {

    const [user, setuser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    })

    const hndlinput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setuser({
            ...user,
            [name]: value
        })
    }
    const hndlform = (e) => {
        e.preventDefault()
        alert(user)
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
                            {/* our main registration code  */}
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
                                            onChange={hndlinput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="email"
                                            value={user.email}
                                            onChange={hndlinput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            value={user.phone}
                                            onChange={hndlinput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            value={user.password}
                                            onChange={hndlinput}
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

import React, { useState } from 'react'
import about from '../images/about.png'
import './Contact.css'

export default function Contact() {

  const [user, setuser] = useState({
    username: "",
    email: "",
    message: ""
  })

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    setuser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const responce = await fetch(``)
    } catch (error) {

    }
  }


  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src={about} alt="we are always ready to help" />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={user.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={user.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="5"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className=" map mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55335.074192969674!2d73.83785190297827!3d29.909171049589162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b513d6964015%3A0xb54a4cb83b8f319b!2sSri%20Ganganagar%2C%20Rajasthan%20335001!5e0!3m2!1sen!2sin!4v1719835107476!5m2!1sen!2sin"
            width={900}
            height={450}
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

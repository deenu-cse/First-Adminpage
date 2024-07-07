import React, { useEffect, useState } from 'react';
import design from '../images/design.png';
import '../Pages/service.css'

export default function Service() {
  const [service, setservice] = useState([]);

  const getservice = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/router/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setservice(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getservice();
  }, []);

  return (
    <>
      <section className='section-service'>
        <div className='containor'>
          <h1>Services</h1>
        </div>
        <div className='containorx'>
          {service.map((item) => (
            <div className='card' key={item.id}>
              <div className='card-img'>
                <img src={design} width={300} />
                <p>{item.productName}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
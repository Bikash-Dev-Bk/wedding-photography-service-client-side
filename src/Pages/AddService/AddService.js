import React, { useEffect, useState } from 'react';
import './AddService.css';

const AddService = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  const handleAddServices = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const img = event.target.img.value;

    const service = {title, price, description, img};
    console.log(title, price, description, img);
    event.target.reset();

    fetch('http://localhost:5000/services',{
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const newService = [...services, service];
      setServices(newService);
    })
    .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <form onSubmit={handleAddServices} className="form">
        <br />
        <br />
        <input type="text" name="title" id="title" placeholder='Title' />
        <br />
        <br />
        <input type="text" name="description" id="description" placeholder=' Description'/>
        <br />
        <br />
        <input type="text" name="price" id="price" placeholder=' Price'/>
        <br />
        <br />
        <input type="text" name="img" id="img" placeholder=' imgUrl'/>
        <br />
        <br />
        <button className="btn mb-10" type="submit">Add Service</button>
        
      </form>
    </div>
  );
};

export default AddService;
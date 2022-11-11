import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price, ratting ,description } = service;

    const [desc, setDesc]= useState([])

    useEffect(()=>{
      const desc = description.split('\n');
      setDesc(desc);

    },[])

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        
          <figure className='card-image'>
            <img className="p-5 rounded" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{title}</h2>
            <div>
              {
                desc.map((description, index) => <p key={index} className='text-justify'>{description}</p>)
              }
            </div>
            
            <div className="">
              <p className="text-2xl text-orange-600 font-semibold">
                Price: {price}
              </p>
              <p className="text-2xl text-orange-600 font-semibold">
                Rating: {ratting} Stars 
              </p>
              
            </div>
            <Link to={`/services/${_id}`}>
                <button className="btn btn-primary w-full">View Details</button>
              </Link>
          </div>
        </div>
      );
};

export default ServiceCard;
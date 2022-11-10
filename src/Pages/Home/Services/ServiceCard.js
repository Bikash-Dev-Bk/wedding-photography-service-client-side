import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price, ratting ,description } = service;
    console.log(img);

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className='card-image'>
            <img className="p-5 rounded" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{title}</h2>
            <p>{description}</p>
            <div className="">
              <p className="text-2xl text-orange-600 font-semibold">
                Price: {price}
              </p>
              <p className="text-2xl text-orange-600 font-semibold">
                Rating: {ratting} Stars
              </p>
              
            </div>
            <Link to={'/'}>
                <button className="btn btn-primary w-full">View Details</button>
              </Link>
          </div>
        </div>
      );
};

export default ServiceCard;
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import useSetTitle from "../../../hooks/useSetTitle";

const ServiceCard = ({ service }) => {
  useSetTitle("Services");
  const { _id, title, img, price, description } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <img className="p-5" src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{description.slice(0, 100)}...</p>

        <div className="">
          <p className="text-2xl text-orange-600 font-semibold">
            Price: {price}
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

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../../../hooks/useSetTitle";
import Reviews from "./Reviews/Reviews";

const ServiceDetails = () => {
  useSetTitle("Service Details");
  const { _id, title, img, price, description } = useLoaderData();

  const [desc, setDesc] = useState([]);

  useEffect(() => {
    const desc = description.split("\n");
    setDesc(desc);
  }, [description]);

  return (
    <div>
      <div>
        <h2 className="text-center text-4xl font-bold"> Details for {title}</h2>
        <div className="card card-compact w-3/4 lg:w-3/5 md:w-3/4 mx-auto bg-base-100 shadow-xl my-12">
          <figure className="card-image">
            <img className="p-5 rounded" src={img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{title}</h2>
            <div>
              {desc.map((description, index) => (
                <p key={index} className="text-justify">
                  {description}
                </p>
              ))}
            </div>

            <div className="">
              <p className="text-2xl text-orange-600 font-semibold">
                Price: {price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-10">
        <h2 className="text-center text-5xl font-bold mb-10">Reviews of {title}</h2>
        <div>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

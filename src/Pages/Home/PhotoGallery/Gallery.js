import React from "react";

const Gallery = ({ photo }) => {
  const  {image}  = photo;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure >
        <img className="p-5 w-full" src={image} alt="" />
      </figure>
    </div>
  );
};

export default Gallery;

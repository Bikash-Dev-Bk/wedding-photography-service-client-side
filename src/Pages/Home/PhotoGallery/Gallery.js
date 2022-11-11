import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Gallery = ({ photo }) => {
  const  {image}  = photo;
  return (
    <div className="card card-compact w-96  bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={image}>
          <img className="p-5 w-full" src={image} alt="" />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default Gallery;

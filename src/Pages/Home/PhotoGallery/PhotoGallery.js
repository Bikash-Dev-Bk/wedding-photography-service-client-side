import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";

const PhotoGallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("https://service-review-server-side-liard.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div className="text-center">
      <h3 className="font-bold text-5xl py-5">Photo Gallery</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {gallery.map((photo) => (
          <Gallery key={photo._id} photo={photo}></Gallery>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;

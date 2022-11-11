import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';

const PhotoGallery = () => {

    const [gallery, setGallery] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/gallery')
        .then(res => res.json())
        .then(data => setGallery(data))
    },[])

    return (
        <div className='text-center'>
            <h3  className='font-bold text-5xl py-5'>Photo Gallery</h3>
            <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6'>
            { gallery.map(photo=> <Gallery key={photo._id} photo={photo}></Gallery>)}
            </div>
        </div>
    );
};

export default PhotoGallery;
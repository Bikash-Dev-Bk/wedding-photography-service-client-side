import React from 'react';
import useSetTitle from '../../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    useSetTitle("Home");
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PhotoGallery></PhotoGallery>
            <Team></Team>
        </div>
    );
};

export default Home;
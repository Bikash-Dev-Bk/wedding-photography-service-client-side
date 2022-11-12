import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import './InvalidPage.css';

const InvalidPage = () => {
    useSetTitle("Invalid Page");
    return (
        <div className='invalid-page'>
            <h1>404</h1>
            <p>Opps!!! Page Not Found!</p>
        </div>
    );
};

export default InvalidPage;
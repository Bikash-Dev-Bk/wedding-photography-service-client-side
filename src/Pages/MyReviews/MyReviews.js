import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';

const MyReviews = () => {
    useSetTitle("My Reviews");
    return (
        <div>
            <h3 className='text-center my-10'>this is my reviews</h3>
        </div>
    );
};

export default MyReviews;
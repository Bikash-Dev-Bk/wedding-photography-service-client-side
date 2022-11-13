import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedReview = useLoaderData();
    
    const [review, setReview] = useState(storedReview);

    const handleUpdateReview = event =>{
        event.preventDefault();
        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('review updated')
                console.log(data);
            }
            
        })
    }

    const handleTextAreaChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <form onSubmit={handleUpdateReview}>
              <textarea onChange={handleTextAreaChange} defaultValue={storedReview.myReview}
                className="textarea textarea-bordered"
                name="myReview"
                id="myReview"
                cols="50"
                rows="5"
                placeholder="Add a review"
                required
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
    );
};

export default Update;
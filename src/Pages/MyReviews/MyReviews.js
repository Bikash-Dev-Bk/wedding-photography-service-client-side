import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useSetTitle from "../../hooks/useSetTitle";

const MyReviews = () => {
  useSetTitle("My Reviews");

  const { user } = useContext(AuthContext);
  console.log(user);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h3 className="text-center my-10 text-5xl font-bold">My Reviews</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {reviews.map((review, index) => (
          <div review={review} key={index}>
            {review.userEmail === user.email ? (
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    <span className="font-bold">Service Name:</span>{" "}
                    {review.serviceTitle}
                  </h2>
                  <p>
                    <span className="font-bold">Review:</span> {review.myReview}
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-error">Delete</button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;

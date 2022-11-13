import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useSetTitle from "../../hooks/useSetTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const MyReviews = () => {
  useSetTitle("My Reviews");

  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [displayReviews, setDisplayReviews] = useState([reviews]);

  const handleDelete = (review) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${review.serviceTitle}`
    );

    if (agree) {
      fetch(`http://localhost:5000/reviews/${review._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingReviews = displayReviews.filter(
              (rev) => rev._id !== review._id
            );
            setDisplayReviews(remainingReviews);
            toast.success("Review deleted successfully.");
          }
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h3 className="text-center my-10 text-5xl font-bold">My Reviews</h3>

      {/* {reviews.length <= 0 && <p>No reviews were added</p>} */}

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
                    <button className="btn btn-primary">
                      <FontAwesomeIcon
                        className="dumbbell"
                        icon={faPenToSquare}
                      />
                    </button>
                    <button
                      className="btn btn-error text-white"
                      onClick={() => handleDelete(review)}
                    >
                      <FontAwesomeIcon className="dumbbell" icon={faTrash} />
                    </button>
                    <Toaster />
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

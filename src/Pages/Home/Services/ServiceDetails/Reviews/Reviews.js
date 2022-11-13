import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Reviews = () => {
  const { _id, title } = useLoaderData();

  const { user } = useContext(AuthContext);
  const location = useLocation();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleAddReview = (event) => {
    event.preventDefault();
    const myReview = event.target.myReview.value;
    const userEmail = user.email;
    const userName = user.displayName;
    const userPhoto = user.photoURL;
    const serviceId = _id;
    const serviceTitle = title;

    const review = {
      myReview,
      userEmail,
      userName,
      userPhoto,
      serviceId,
      serviceTitle,
    };
    event.target.reset();

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newReview = [...reviews, review];

        setReviews(newReview);
        toast.success("Successfully added review");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        {user?.uid ? (
          <>
            <h3 className="text-2xl font-bold mb-4">Add a review</h3>
            <form onSubmit={handleAddReview}>
              <textarea
                className="textarea textarea-bordered"
                name="myReview"
                id="myReview"
                cols="50"
                rows="5"
                placeholder="Add a review"
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Toaster />
            </form>
          </>
        ) : (
          <div>
            <h3 className="text-2xl font-bold">
              Please{" "}
              <Link
                to="/login"
                state={{ from: location }}
                replace
                className="text-blue-700"
              >
                login
              </Link>{" "}
              to add a review
            </h3>
          </div>
        )}
      </div>

      <div>
        {reviews.map((review) => (
          <div className="mt-5">
            <div>
              {_id === review.serviceId ? (
                <div>
                  <div>
                    <img
                      src={review.userPhoto}
                      alt="proPic"
                      style={{ height: "40px" }}
                      className="rounded-full mr-5"
                    />
                    <p>{review.userName}</p>
                    <p className="mt-2">comment: {review.myReview}</p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

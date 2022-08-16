import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function UpdateReviews() {
  const [movieReviewList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

  const updateReview = (movie) => {
    Axios.put("http://localhost:3001/api/update/", {
      movieName: movie,
      movieReview: newReview,
    });
    setNewReview("");
  };

  return (
    <div className="App">
      <div className="moviesList">
        {movieReviewList.map((val) => {
          return (
            <div className="card">
              <h1 >{val.movieName}</h1>
              <h1 class="card_reviews" >{val.movieReview}</h1>
              <div class="update_delete_div">
                <button
                  className="btn"
                  onClick={() => {
                    deleteReview(val.movieName);
                  }}
                >
                  delete
                </button>
                <input
                  type="text"
                  id="updateInput"
                  onChange={(e) => {
                    setNewReview(e.target.value);
                  }}
                />
                <button
                  className="btn"
                  onClick={() => {
                    updateReview(val.movieName);
                  }}
                >
                  update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpdateReviews;

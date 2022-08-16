import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function WriteReviews() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert/", {
      movieName: movieName,
      movieReview: review,
    }).then(() => {
      alert("sucessful insert");
    });
  };

  

  

  return (
    <div className="App">
      
      <div className="content">
        <div className="movienamebox">
          <h2> Movie Name :</h2>
          <input
            className="namebox"
            type="text"
            name="movieName"
            onChange={(e) => {
              setMovieName(e.target.value);
            }}
          />
        </div>
        <div className="moviereviewbox">
          <h2> Reviews :</h2>
          <input
            className="reviewbox"
            type="text"
            name="movieReview"
            onChange={(e) => {
              setReview(e.target.value);
            }}
          />
        </div>
        <button className="btn" onClick={submitReview}>
          {" "}
          Submit
        </button>
      </div>
    </div>
  );
}

export default WriteReviews;

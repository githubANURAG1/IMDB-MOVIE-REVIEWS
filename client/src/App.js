import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios from "axios";
import Navbar from "./Header";
import Footer from "./Footer";
import UpdateReviews from "./UpdateReviews";
import WriteReviews from "./WriteReviews";
import Home from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [movieName, setMovieName] = useState("");
  // const [review, setReview] = useState("");
  // const [movieReviewList, setMovieList] = useState([]);
  // const [newReview, setNewReview] = useState([]);
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get/").then((response) => {
  //     setMovieList(response.data);
  //   });
  // }, []);

  // const submitReview = () => {
  //   Axios.post("http://localhost:3001/api/insert/", {
  //     movieName: movieName,
  //     movieReview: review,
  //   }).then(() => {
  //     alert("sucessful insert");
  //   });
  // };

  // const deleteReview = (movie) => {
  //   Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  // };

  // const updateReview = (movie) => {
  //   Axios.put("http://localhost:3001/api/update/", {
  //     movieName: movie,
  //     movieReview: newReview,
  //   });
  //   setNewReview("");
  // };

  return (
    <div className="App">
      <div className="routers">
        <BrowserRouter>
          <Navbar />
          {/* <WriteReviews/> */}
          {/* <UpdateReviews/> */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/WriteReviews" element={<WriteReviews />} />
          </Routes>
          <Routes>
            <Route path="/UpdateReviews" element={<UpdateReviews />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      {/* <div className="content">
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
        <div className="moviesList">
          {movieReviewList.map((val) => {
            return (
              <div className="card">
                <h1>{val.moiveId}</h1>
                <h1>{val.movieName}</h1>
                <h1>{val.movieReview}</h1>
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
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export default App;

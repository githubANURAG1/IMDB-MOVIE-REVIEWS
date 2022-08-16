import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="home">
    <div class="home_text">
      <Link class="home_text" to="/WriteReviews">Write Review</Link>
    </div>
    <div class="home_text">
      <Link to="/UpdateReviews">Check Reviews</Link>
    </div>
  </div>
  );
}

export default Footer;
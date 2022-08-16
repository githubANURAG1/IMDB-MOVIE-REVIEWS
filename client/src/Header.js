import React, { useState, useEffect } from "react";
import "./App.css";
import {Link} from "react-router-dom";


function Header_Navbar() {
  return (
    <div className="navbar">
        <div className="logo">imdb</div>
        <h1><Link  class="linkclass" to="/">IMDB REVIEWS</Link></h1>
        <div className="codeon">CodeOn</div>
      </div>
      
  );
}

export default Header_Navbar;
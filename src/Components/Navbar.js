import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Navbar.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Navbar ({onSearch})
{ 
const [MovieSearched,SetMovieSearched]= useState('');

const onSubmit=(event)=>{
event.preventDefault();
onSearch(MovieSearched);
SetMovieSearched('');

}

    return (<nav className="navbar navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/">Home</Link>
      <Link className="navbar-brand" to="/AddFilm">Add movie</Link>
      <form className="form-inline" onSubmit={onSubmit}>
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={MovieSearched}
          onChange={(event)=>SetMovieSearched(event.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>

    )
}
export default Navbar;

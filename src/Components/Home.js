import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SingleMovie from './SingleMovie';
import './Home.css';
function Home({movies,match}){
  //[movie,SetMovie]=useState({id:'',poster:'',title:'',year:'',rate:'',director:''});
 //var mo=movies.find((movie)=>movie.id===match.params.id);
  //const movie=movies.find((movie)=>movie.id===match.params.id)
  console.log(match)
    return (
        <div className="main">
        <hr></hr>
        <h3>List of Movies</h3>
        <hr></hr>
        {movies.length > 0 ? (
          <div className="movie-list">
            {movies.map((movie) => (
              <Link to={`/${movie.id}`}  style={{ textDecoration: 'none' ,color:'black'}}>
              <SingleMovie
                key={movie.id}
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
                rate={movie.rate}
                director={movie.director}
              />
              </Link>
            ))}
          </div>
        ) : (
          "no movie with this information exist"
        )}
      </div>)
}
export default Home;
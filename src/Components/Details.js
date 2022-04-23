 import React, { useState, useEffect } from "react";
 import './Details.css';
 import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
function Details ({movies,match}){
    const [Movie, setMovie]= useState({});
    useEffect(()=>{
        setMovie(movies.find((film)=>film.id.toString()==match.params.id))
console.log(match);
console.log(Movie)
    },[])
    return (
      <div class="card-specific" >
  <div class="card-header">
      <h3> {Movie.title}</h3>
   
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p >{Movie.descreption}</p>
      <Link to="/" href="#" class="btn btn-primary">Go Home Page</Link>
    </blockquote>
  </div>
</div>
    )
    
}
export default Details; 


import React from 'react'
//import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import './SingleMovie.css';
function  SingleMovie({title,poster,year,rate,director})
 {
  return ( 

    <div className="container">
   
      <div className="row">
      <div className="col-sm">
    <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={poster} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Produced by <b>{director}</b> on {year}.</p>
   <div className="card-footer">
    <a href="#" className="btn btn-primary">See More</a>
    <button type="button" class="btn btn-secondary">rate:{rate}</button>
    </div>
  </div>
  </div>
</div>
</div>
</div>
  )
 }

  




export default SingleMovie;
import React from 'react';
import PropTypes from 'prop-types'

const Card = ({movie}) => {
    return (
        <div className="col-md-4">
        <div className="card">
            <img src={movie.Poster}alt={movie.Title}   />
            <div className="card-body">
            <h4>{movie.Title} {movie.Year}</h4>
            <p>{movie.Type}</p>
            </div>
        </div>
        </div>
    )
} 
Card.propTypes ={
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Poster: PropTypes.string,
        Year: PropTypes.string,
        Type: PropTypes.string,
        
    }).isRequired

}
export default Card;
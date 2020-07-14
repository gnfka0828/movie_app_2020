import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css"

// function component의 인자로 props 말고 props의 특정 값만 가져올 때는 꼭 curly bracket으로 감싸주세요
// ex)
// function Movies( id, year, title, summary, poster) { ... } // X
// function Movies( {id, year, title, summary, poster}) {...} // O

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: `/movie/${id}`,
                    state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                    }
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                    <li key={index} className="genres__genre">
                        {genre}
                    </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
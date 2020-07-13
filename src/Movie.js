import React from "react";
import PropTypes from "prop-types";

// function component의 인자로 props 말고 props의 특정 값만 가져올 때는 꼭 curly bracket으로 감싸주세요
// ex)
// function Movies( id, year, title, summary, poster) { ... } // X
// function Movies( {id, year, title, summary, poster}) {...} // O

function Movie({id, year, title, summary, poster}) {
    console.log(title);
    return <h4>title : {title}</h4>
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
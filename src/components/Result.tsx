import React from 'react'

function Result({ result, openPopup }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} alt="Poster for result"/>
			<h2>{result.Title}</h2>
		</div>
	)
}

export default Result


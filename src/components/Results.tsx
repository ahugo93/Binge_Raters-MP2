import React from 'react'
import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{results.map((result: { imdbID: React.Key | null | undefined }) => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}


export default Results

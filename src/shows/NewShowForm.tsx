import { useState } from "react"


function NewShowForm() {



	const [show, setShow] = useState({
		name: '',
		genres: '',
		first_air_date: '',
		number_of_seasons: '',
		number_of_episodes: '',
        poster: ''
	})

	async function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault()

		await fetch(`http://localhost:3000/shows`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(show)
		})


	}

	return (
		<main>
			<h1>Add a New Show</h1>
			<form method="POST" action="/shows" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Show Name</label>
					<input
						required
						value={show.name}
						onChange={e => setShow({ ...show, name: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="pic">Show Picture</label>
					<input
						value={show.poster}
						onChange={e => setShow({ ...show, poster: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="genre">Genre</label>
					<input
						value={show.genres}
						onChange={e => setShow({ ...show, genres: e.target.value })}
						className="form-control"
						id="genre"
						name="genre"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="air-date">First air date</label>
					<input
						value={show.first_air_date}
						onChange={e => setShow({ ...show, first_air_date: e.target.value })}
						className="form-control"
						id="state"
						name="state"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="seasons">Number of Seasons</label>
					<input
						value={show.number_of_seasons}
						onChange={e => setShow({ ...show, number_of_seasons: e.target.value })}
						className="form-control"
						id="seasons" name="seasons" required />
				</div>
                <div className="form-group">
					<label htmlFor="episodes">Number of Episodes</label>
					<input
						value={show.number_of_episodes}
						onChange={e => setShow({ ...show, number_of_episodes: e.target.value })}
						className="form-control"
						id="episodes" name="episodes" required />
				</div>
				<input className="btn btn-primary" type="submit" value="Add " />
			</form>
		</main>
	)
}

export default NewShowForm
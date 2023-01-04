import { useEffect, useState } from "react";

function ShowIndex(data: any) {

	const [shows, setShows] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/shows`)
			const resData = await response.json()
			setShows(resData)
		}
		fetchData()
	}, [])

	let showsFormatted = shows.map((show) => {
		return (
			<div className="col-sm-6" key={show.id}>
				<h2>
					<a href={`/shows/${show.id}`} >
						{show.name}
					</a>
				</h2>
				<p className="text-center">
					{show.genres}
				</p>
				<img style={{ width: '75%' }} src={show.pic} alt={show.name} />
				<p className="text-center">
					This show has {show.number_of_seasons} seasons, and {show.number_of_episodes} episodes
				</p>
			</div>
		)
	})
	return (
		<main>
			<h1>Binge Worthy TV Shows</h1>
			<div className="row">
				{showsFormatted}
			</div>
		</main>
	)
}

export default ShowIndex;
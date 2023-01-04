import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router"

function ShowDetails() {

	const { id } = useParams()

	const history = useHistory()

	const [show, setShow] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/shows/${id}`)
			const resData = await response.json()
			setShow(resData)
		}
		fetchData()
	}, [id])

	async function deleteShow() {
		await fetch(`http://localhost:3000/shows/${show.id}`, {
			method: 'DELETE'
		})
		history.push('/shows')
	}

	return (
		<main>
			<h1>{show.name}</h1>
			<a href={`/shows/${show.id}/edit`} className="btn btn-warning">
				Edit
			</a>
			<button type="submit" className="btn btn-danger" onClick={deleteShow}>
				Delete
			</button>
		</main>
	)
}

export default ShowDetails;
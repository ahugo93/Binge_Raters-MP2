import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CommentBox from './CommentSection';



function Popup({ selected, closePopup }) {
	return (
		
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<div className="plot">
					<img src={selected.Poster} alt="Poster"/>
					<p>{selected.Plot}</p>
				</div>
				<Stack spacing={3}>
				<Rating name="half-rating" defaultValue={2.5} precision={0.5} />
	  			</Stack>
				  <CommentBox/>
				<button className="close" onClick={closePopup}>Close</button>
				
			</div>

			
		</section>
	)
}

export default Popup
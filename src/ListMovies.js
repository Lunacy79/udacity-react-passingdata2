import React from 'react';
import LikedMovies from './LikedMovies';

function ListMovies(props) {
  
	const movieList = Object.keys(props.movies).map((id) => (
             	<li key={props.movies[id].id}>
      				<h2>{props.movies[id].name}</h2>
					<LikedMovies profiles={props.profiles} movies={props.movies} movie={props.movies[id].id} users={props.users} />
      			</li>
      		))
  return (
    	<ul>
    		{movieList}
    		
		</ul>

    )
}

export default ListMovies;
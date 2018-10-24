import React from 'react';

function LikedMovies(props) {
	 const likedMovies = props.profiles.map(profile => {
      return props.movies[profile.favoriteMovieID].id
    });
    const numMovies = Object.keys(props.movies).map(movie => {
      return likedMovies.filter(likedMovie => likedMovie === movie).length
    });
   const rows = [];
  for(let i = 1; i <= props.movies.length; i++) {
    if(numMovies[i] === 0) {
      rows.push(<p>None of the current users liked this movie</p>);
    }
    else {
      rows.push(<p>Liked By: {numMovies[i]}</p>);
    }
  }
  return rows;
}

export default LikedMovies;
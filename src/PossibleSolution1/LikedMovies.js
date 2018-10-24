import React from 'react';

function LikedMovies(props) {
	 const likedMovies = props.profiles.map(profile => {
      return props.movies[profile.favoriteMovieID].id
    });
    const numMovies = Object.keys(props.movies).map(movie => {
      return likedMovies.filter(likedMovie => movie === likedMovie).length
    });
  return "hello";
  
}

export default LikedMovies;
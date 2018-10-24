import React from 'react';

function LikedMovies(props) {
	 const numLikers = props.profiles.filter(profile => profile.favoriteMovieID == props.movie).length;
    
   
    if(numLikers === 0) {
      return (<p>None of the current users liked this movie</p>);
    }
    else {
      return (<p>Liked By: {numLikers}</p>);
    }
  
  
}

export default LikedMovies;
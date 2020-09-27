import React from 'react';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const colorVote = (vote) => {
  if (vote < 5 && vote != 0) {
    return 'red';
  }

  if (vote >= 5 && vote < 7) {
    return 'yellow';
  }

  if (vote >= 7) {
    return 'green';
  }
};

const Movie = ({ poster_path, title, vote_average, overview }) => {
  return (
    <div className="movie">
      <img src={poster_path ? IMG_API + poster_path : 'https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'} title={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={`rate ${colorVote(vote_average)}`}>{vote_average}</span>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;

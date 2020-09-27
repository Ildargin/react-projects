import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './styles.css';
import Movie from './components/Movie.js';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8f621992c7ba0c3f97d76a3d91881265&page=1');
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies('https://api.themoviedb.org/3/search/movie?&api_key=8f621992c7ba0c3f97d76a3d91881265&query=' + searchTerm);
    }
    setSearchTerm('');
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
        </form>
      </header>
      <div className="movie-container">{movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

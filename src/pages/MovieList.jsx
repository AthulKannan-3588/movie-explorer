import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(res => res.json())
      .then(data => setMovies(data.slice(0, 20)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Popular Shows
        </h2>
        <p className="text-muted">Select a movie FOR FUrther Details</p>
      </div>

      <div className="row g-4">
        {movies.map(movie => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={movie.id}>
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <img
                src={movie.image?.medium}
                className="card-img-top"
                alt={movie.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{movie.name}</h5>
                <p className="text-muted mb-3">
                  Genre: {movie.genres?.join(', ') || 'N/A'}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                  className="btn btn-outline-primary mt-auto"
                >
                  View Movie
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

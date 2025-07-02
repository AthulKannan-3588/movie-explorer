import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">← Back to List</Link>
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.image?.medium}
              className="img-fluid"
              alt={movie.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2>{movie.name}</h2>
              <p><strong>Genre:</strong> {movie.genres?.join(', ')}</p>
              <p><strong>Language:</strong> {movie.language}</p>
              <p><strong>Rating:</strong> {movie.rating?.average || 'N/A'}</p>
              <p><strong>Summary:</strong></p>
              <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

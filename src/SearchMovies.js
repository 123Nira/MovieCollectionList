import "./styles.css";
import React, { useState } from "react";
import MoviCard from "./MovieCard.js";
export default function SearchMovi() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const SearchMovies = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=89f4ec6343f74978a477d733171b3e35&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={SearchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Enter your favorite movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MoviCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

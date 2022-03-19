import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import styles from "../css/homepage.css";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState(null);
  useEffect(() => {
    query &&
      axios
        .get(`http://www.omdbapi.com/?s=${query}&apikey=2ec36871`)
        .then((res) => setMovies(res.data?.Search));
  }, [query]);
  console.log(movies);
  return (
    <div>
      <section>
        <img
          src="https://res.cloudinary.com/wizzle3d/image/upload/v1647688425/samples/Rectangle_5_lnn5ic.png"
          alt=""
          id="showcase"
        />
        <div className="container">
          <h1>Watch something incredible.</h1>
        </div>
      </section>
      <SearchBar setQuery={setQuery} />
      <section className="container">
        <h2>{query}</h2>
        <div className="movie-section">
          {movies?.map((movie) => (
            <MovieList key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

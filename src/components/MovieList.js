import "../css/movieThumb.css";

const MovieList = ({ movie }) => {
  return (
    <div className="movie-frame">
      <img src={movie.Poster} alt="" className="movie-img" />
      <p className="movie-title">{movie.Title}</p>
    </div>
  );
};

export default MovieList;

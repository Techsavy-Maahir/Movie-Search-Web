import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';


function MovieCard({movie}) {

    const { addToFavourites, removeFromFavourites, isFavourite } = useMovieContext();

    const favourite = isFavourite(movie.imdbID);
    function handleFavouriteClick() {
        if(favourite){
            removeFromFavourites(movie.imdbID);
        } else {
            addToFavourites(movie);
        }
    }
  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={
            movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.Title}
            onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x450?text=No+Image";
            }}
            />

            <div className="movie-overlay">
                <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={handleFavouriteClick}>
                     {favourite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
        <div className="movie-info"> 
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    </div>
  )
}

export default MovieCard
import MovieCard from "../components/MovieCard.jsx"
import { useState, useEffect } from "react";
import { searchMovies,getMovies } from "../services/api.js";
import '../css/Home.css'

function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


   useEffect(() => {
    const LoadMovies = async () => {
        try {
            const popularMovies = await getMovies();

            console.log("Movies:", popularMovies);

            setMovies(popularMovies); 
            console.log("Movies without poster:",popularMovies.filter(m => m.Poster === "N/A").length);


        } catch (err) {
            console.log(err);
            setError("Failed to load movies. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    LoadMovies();
}, []);

    
    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true);
        try{
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch(err){
            console.log(err);
            setError("Failed to search movies...")
        } finally{
            setLoading(false);
        }

        
    }
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error-message">{error}</div>}

        {loading ? (<div className="loading">Loading...</div>) : (<div className="movies-grid">
            {movies.map(
            (movie) => (
             <MovieCard movie={movie} key={movie.imdbID}/>
             ))}
        </div> )}
        
    </div>
    );
}

export default Home
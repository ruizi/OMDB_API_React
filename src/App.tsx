import React from 'react';
import './App.css';
import SearchMovieInput from "./components/SearchMovieInput";
import SearchResults from "./components/SearchResults";
import NominatedMovies from "./components/NominatedMovies";

function App() {
    return (
        <div className="App">
            <SearchMovieInput/>
            <SearchResults/>
            <NominatedMovies/>
        </div>
    );
}

export default App;

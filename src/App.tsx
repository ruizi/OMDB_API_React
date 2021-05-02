import React, {useEffect, useState} from 'react';
import './App.css';

interface Movie {
    title: string,
    yearOfLease: number,
    poster: string,
    imdbID: string,
}


function App() {
    const [movieTitle, setMovieTitle] = useState("");
    const [movies, setMovies] = useState<Array<Movie>>([]);
    const [nominations, setNominations] = useState<Array<Movie>>([]);

    useEffect(() => {
        if (nominations.length === 5) {
            alert("well done")
        }
    }, [nominations]);

    const onChangeMovieTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieTitle(e.target.value);
    }

    const fetchMovieFromAPI = async (movieTitle: string) => {
        const apiResponse = await fetch('https://www.omdbapi.com/?s=' + movieTitle + '&type=movie&apikey=9c01b986')
        if (apiResponse.ok) {
            const movieArray = await apiResponse.json()
            console.log(movieArray);
            const movieItems = movieArray["Search"];
            console.log(movieItems);
            const movArr = movieItems.map((mov: any) => ({
                title: mov.Title,
                yearOfLease: mov.Year,
                poster: mov.Poster,
                imdbID: mov.imdbID
            }));
            console.log(movArr)
            setMovies(movArr)
        }
    }

    const onClickSearchBtn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await fetchMovieFromAPI(movieTitle);
        console.log(movies)
    }

    const nominateMovie = (nominatedMovie: Movie) => {
        if(nominations.length<5){
            setNominations([...nominations, nominatedMovie])
        }else {
            alert("well done")
        }
    }

    const deNominateMovie = (deNominatedMovie: Movie) => {
        setNominations(nominations.filter((mov) => {
            return mov.imdbID !== deNominatedMovie.imdbID;
        }))
    }

    return (
        <div className="App">
            <form>
                <div>
                    <input onChange={onChangeMovieTitle} value={movieTitle}/>
                </div>
                <div>
                    <button onClick={onClickSearchBtn}>Search</button>
                </div>
            </form>

            <div>
                {movies.map((mov, index) => (
                    <div key={index}>
                        <p>
                            {mov.title} - Posted on <span>{mov.yearOfLease}</span>
                            {nominations.length<5 && (
                                <button onClick={() => nominateMovie(mov)} type={"button"}>
                                    Nominate
                                </button>
                            )}
                        </p>
                    </div>
                ))}
            </div>

            <div>
                {nominations.map((mov, index) => (
                    <div key={index}>
                        <p>
                            {mov.title} - Posted on <span>{mov.yearOfLease}</span>
                        </p>
                        <button onClick={() => deNominateMovie(mov)} type={"button"}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

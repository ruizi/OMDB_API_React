import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getMovies} from "../actions/movieAction";

const SearchMovieInput = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();

    const submitInput = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        await getMovies(movieTitle, dispatch);
        setMovieTitle('');
    }

    return (
        <React.Fragment>
            <form onSubmit={submitInput}>
                <input onChange={event => setMovieTitle(event.target.value)} value={movieTitle}
                       placeholder="Input movie title" required/>
                <input type="submit" value="Submit" className="btn btn-dark my-1"/>
            </form>
        </React.Fragment>
    )
}

export default SearchMovieInput;
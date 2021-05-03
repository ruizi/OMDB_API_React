import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import React from "react";
import {addNomination, Movie} from "../actions/movieAction";

const SearchResults = () => {
    const _movies = useSelector((state: AppState) => state.movies);
    const movies: Array<Movie> = _movies['movieSearched'];
    const nominations: Array<Movie> = _movies['movieNominated'];
    const dispatch = useDispatch();

    const renderButton = (mov: Movie) => {
        if (nominations.length < 5) {
            return (
                <button onClick={() => addNomination(mov, dispatch)} type={"button"}>
                    Nominate
                </button>
            )
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            {movies && (
                <div>
                    {movies.map((mov, index) => (
                        <div key={index}>
                            <p>
                                {mov.title} - Posted on <span>{mov.yearOfLease}</span>
                                {renderButton(mov)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </React.Fragment>
    );

}
export default SearchResults;
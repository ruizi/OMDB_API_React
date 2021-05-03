import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import {Movie, removeNomination} from "../actions/movieAction";

const NominatedMovies = () => {
    const _movies = useSelector((state: AppState) => state.movies);
    const dispatch = useDispatch();
    const nominations: Array<Movie> = _movies['movieNominated'];

    return (
        <React.Fragment>
            <div>
                <h1>Nominated Movies</h1>
                {nominations.map((mov, index) => (
                    <div key={index}>
                        <p>
                            {mov.title} - Posted on <span>{mov.yearOfLease}</span>
                            <button onClick={() => removeNomination(mov, dispatch)} type={"button"}>
                                Remove
                            </button>
                        </p>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default NominatedMovies;
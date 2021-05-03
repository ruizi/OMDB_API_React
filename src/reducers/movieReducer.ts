import {ADD_NOMINATION, MOVIE_ERROR, REMOVE_NOMINATION, SEARCH_MOVIE} from "../actions/types";
import {Movie} from "../actions/movieAction";


export interface MovieAction {
    type: string;
    payload: any;
}

const initialMovieState = {
    movieSearched: [],
    movieNominated: [],
    error: {},
}

export const MovieReducer = (state: any | null = initialMovieState, action: MovieAction) => {
    const {type, payload} = action;
    console.log(state)
    console.log("payload", payload);
    switch (type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                movieSearched: payload,
            }
        case ADD_NOMINATION:
            return {
                ...state,
                movieNominated: [...state.movieNominated, payload],
            }
        case REMOVE_NOMINATION:
            return {
                ...state,
                movieNominated: state.movieNominated.filter((mov: Movie) => {
                        return mov !== payload;
                    }
                )
            }
        case MOVIE_ERROR:
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
    }
}

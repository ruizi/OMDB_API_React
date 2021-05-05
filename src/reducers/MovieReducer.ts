import {
    ADD_NOMINATION, LOAD_NOMINATED_MOVIES,
    LOAD_NOMINATED_MOVIES_ERROR,
    MOVIE_ERROR, REFRESH_LOCAL_STORAGE,
    REMOVE_ALL_NOMINATION,
    REMOVE_NOMINATION,
    SEARCH_MOVIE
} from "../actions/types";
import {Movie} from "../actions/movieAction";


export interface MovieAction {
    type: string;
    payload: any;
}

const initialMovieState = {
    movieSearched: [],
    movieNominated: [],
    searchInput: "",
    movieLeaseYear: "",
    pageNum: 1,
    pageSize: 10,
    totalResults: 0,
    error: {},
}

export const MovieReducer = (state: any | null = initialMovieState, action: MovieAction) => {
    const {type, payload} = action;
    switch (type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                movieSearched: payload.movieItems,
                pageNum: payload.newPageNum,
                totalResults: payload.totalResults,
                searchInput: payload.searchInput,
                movieLeaseYear: payload.movieLeaseYear,
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
        case REMOVE_ALL_NOMINATION:
            return {
                ...state,
                movieNominated: []
            }
        case REFRESH_LOCAL_STORAGE:
            localStorage.setItem("nominatedMovies", JSON.stringify(state.movieNominated));
            return state;
        case LOAD_NOMINATED_MOVIES:
            return {
                ...state,
                movieNominated: payload,
            }
        case LOAD_NOMINATED_MOVIES_ERROR:
        case MOVIE_ERROR:
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
    }
}

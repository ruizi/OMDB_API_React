import axios from "axios";
import {Dispatch} from "redux";

import {
    SEARCH_MOVIE, ADD_NOMINATION, REMOVE_NOMINATION, MOVIE_ERROR
} from "./types";

export interface Movie {
    title: string,
    yearOfLease: number,
    poster: string,
    imdbID: string,
}

interface myAction {
    type: string,
    payload: any,
}

//Get first ten movies based on the input movie title
export const getMovies = async (movieTitle: string, dispatch: Dispatch<myAction>) => {
    try {
        const res = await axios.get('https://www.omdbapi.com/?s=' + movieTitle + '&type=movie&apikey=9c01b986')
        console.log(res)
        if (res.data["Search"]) {
            const movieItems = res.data["Search"].map((mov: any) => ({
                title: mov.Title,
                yearOfLease: mov.Year,
                poster: mov.Poster,
                imdbID: mov.imdbID
            }));
            dispatch({
                type: SEARCH_MOVIE,
                payload: movieItems,
            });
        } else {
            dispatch({
                type: MOVIE_ERROR,
                payload: {
                    msg: "Too many results. or invalid input!",
                    status: res.status,
                },
            });
        }
    } catch (e) {
        dispatch({
            type: MOVIE_ERROR,
            payload: {
                msg: e.response.statusText,
                status: e.response.status,
            },
        });
    }
}

export const addNomination = (newNominatedMovie: Movie, dispatch: Dispatch<myAction>) => {
    try {
        dispatch({
            type: ADD_NOMINATION,
            payload: newNominatedMovie,
        });
    } catch (e) {
        dispatch({
            type: MOVIE_ERROR,
            payload: {
                msg: e,
            },
        });
    }
}


export const removeNomination = (newNominatedMovie: Movie, dispatch: Dispatch<myAction>) => {
    try {
        dispatch({
            type: REMOVE_NOMINATION,
            payload: newNominatedMovie,
        });
    } catch (e) {
        dispatch({
            type: MOVIE_ERROR,
            payload: {
                msg: e,
            },
        });
    }
}

export type GetMovieAction = ReturnType<typeof getMovies>;

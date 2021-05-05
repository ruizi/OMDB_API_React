import axios from "axios";
import {Dispatch} from "redux";

import {
    SEARCH_MOVIE,
    ADD_NOMINATION,
    REMOVE_NOMINATION,
    MOVIE_ERROR,
    REMOVE_ALL_NOMINATION,
    LOAD_NOMINATED_MOVIES,
    LOAD_NOMINATED_MOVIES_ERROR, REFRESH_LOCAL_STORAGE
} from "./types";
import {AddMessage} from "./MessageAction";

export interface Movie {
    title: string,
    yearOfLease: number,
    poster: string,
    imdbID: string,
}

interface myAction {
    type: string,
    payload: any | null,
}

//Get first ten movies based on the input movie title
export const getMovies = async (movieTitle: string, pageNum: number, dispatch: Dispatch<myAction>) => {
    try {
        const res = await axios.get(`https://www.omdbapi.com/?s=${movieTitle}&type=movie&apikey=9c01b986&page=${pageNum}`)
        console.log(res)
        if (res.data["Search"]) {
            const movieItems = res.data["Search"].map((mov: any) => ({
                title: mov.Title,
                yearOfLease: mov.Year,
                poster: mov.Poster,
                imdbID: mov.imdbID
            }));
            const newPageNum = pageNum;
            const totalResults = res.data.totalResults;
            const searchInput = movieTitle;
            dispatch({
                type: SEARCH_MOVIE,
                payload: {movieItems, newPageNum, totalResults, searchInput}
            });
            await AddMessage("Success get date from API@", 'success', dispatch);
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

        dispatch({
            type: REFRESH_LOCAL_STORAGE,
            payload: {}
        })

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

        dispatch({
            type: REFRESH_LOCAL_STORAGE,
            payload: {}
        })
    } catch (e) {
        dispatch({
            type: MOVIE_ERROR,
            payload: {
                msg: e,
            },
        });
    }
}

export const removeAllNomination = (dispatch: Dispatch<myAction>) => {
    try {
        dispatch({
            type: REMOVE_ALL_NOMINATION,
            payload: null
        });

        dispatch({
            type: REFRESH_LOCAL_STORAGE,
            payload: {}
        })
    } catch (e) {
        dispatch({
            type: MOVIE_ERROR,
            payload: {
                msg: e,
            },
        });
    }
}

export const loadNominatedMovies = (dispatch: Dispatch<myAction>) => {
    try {
        if (localStorage.nominatedMovies) {
            const nominated: Array<Movie> = JSON.parse(localStorage.getItem("nominatedMovies") || "[]");
            dispatch({
                type: LOAD_NOMINATED_MOVIES,
                payload: nominated,
            })
        }
    } catch (e) {
        dispatch({
            type: LOAD_NOMINATED_MOVIES_ERROR,
            payload: {
                msg: e,
            },
        });
    }
}

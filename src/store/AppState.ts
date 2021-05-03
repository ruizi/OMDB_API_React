import {combineReducers} from "redux";
import {UserReducer} from "../reducers/UserReducers";
import {MovieReducer} from "../reducers/movieReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    movies: MovieReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
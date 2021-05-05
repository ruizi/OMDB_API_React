import {combineReducers} from "redux";
import {UserReducer} from "../reducers/UserReducers";
import {MovieReducer} from "../reducers/MovieReducer";
import {MessageReducer} from "../reducers/MessageReducer";

export const rootReducer = combineReducers({
    user: UserReducer,
    movies: MovieReducer,
    messages: MessageReducer
});

export type AppState = ReturnType<typeof rootReducer>;
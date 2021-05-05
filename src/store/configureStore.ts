import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./AppState";

const initialState = {};

const configureStore = () => {
    return createStore(rootReducer, initialState,composeWithDevTools());
}

export default configureStore;
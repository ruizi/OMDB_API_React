import {v4 as uuid} from "uuid";
import {Dispatch} from "redux";
import {ADD_MESSAGE, REMOVE_MESSAGE} from "./types";
import {VariantType} from "notistack";

export interface messageObj {
    message: string,
    alertType: VariantType,
    id: string
}

export interface addMsgAction {
    type: string;
    payload: messageObj,
}

export interface closeMsgAction {
    type: string,
    payload: string,
}

export const AddMessage = (message: string, alertType: VariantType, dispatch: Dispatch<addMsgAction | closeMsgAction>, timeout = 3000) => {
    const id = uuid(); //generate a uuid for the new alert action.
    dispatch({
        //dispatch this new action to the reducer.
        type: ADD_MESSAGE,
        payload: {message, alertType, id},
    });

    //make the alert disappear by setting a timeout
    setTimeout(() => dispatch({type: REMOVE_MESSAGE, payload: id}), timeout);
}

export const CloseMessage = (messageId: string, dispatch: Dispatch<closeMsgAction>) => {
    dispatch({
        type: REMOVE_MESSAGE,
        payload: messageId
    })
}


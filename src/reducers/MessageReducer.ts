import {addMsgAction, closeMsgAction, messageObj} from "../actions/MessageAction";

export interface messageState {
    messageArray: Array<addMsgAction["payload"]>;
}

const initialMessageState = {
    messageArray: [],
}

export const MessageReducer = (state: messageState = initialMessageState, action: addMsgAction | closeMsgAction) => {
    const {type, payload} = action;
    switch (type) {
        case "ADD_MESSAGE":
            return {
                ...state,
                messageArray: [...state.messageArray, payload],
            }
        case "REMOVE_MESSAGE":
            return {
                ...state,
                messageArray: state.messageArray.filter((msgObj: messageObj) => {
                    return msgObj.id !== payload;
                })
            }
        default:
            return state
    }
}
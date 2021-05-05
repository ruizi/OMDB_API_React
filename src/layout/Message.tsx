import {useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import React from "react";
import {messageObj} from "../actions/MessageAction";
import {useSnackbar} from 'notistack';

const Message = () => {
    const _messages = useSelector((state: AppState) => state.messages);
    const messages: Array<messageObj> = _messages ? _messages['messageArray'] : [];
    const {enqueueSnackbar} = useSnackbar();
    const showMsg = (message: messageObj) => {
        enqueueSnackbar(message.message, {variant: message.alertType, preventDuplicate: true})
    }

    return (
        <>
            {messages !== null && messages.length > 0 &&
            messages.map((item: messageObj, index) => (
                showMsg(item)))
            }
        </>
    )

}


export default Message;
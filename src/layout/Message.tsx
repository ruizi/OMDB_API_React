import {useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import {useEffect} from "react";
import {messageObj} from "../actions/MessageAction";
import {useSnackbar} from 'notistack';

const Message = () => {
    const _messages = useSelector((state: AppState) => state.messages);
    const messages: Array<messageObj> = _messages ? _messages['messageArray'] : [];
    const {enqueueSnackbar} = useSnackbar();


    useEffect(() => {
        messages !== null && messages.length > 0 &&
        messages.map((item: messageObj, index) => (enqueueSnackbar(item.message, {
            variant: item.alertType,
            preventDuplicate: true,
        })))
    }, [messages, enqueueSnackbar])

    return null

}


export default Message;
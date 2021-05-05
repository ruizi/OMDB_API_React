import {connect, useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import Snackbar from '@material-ui/core/Snackbar';
import React, {useEffect, useRef} from "react";
import {CloseMessage, messageObj} from "../actions/MessageAction";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import {VariantType, useSnackbar} from 'notistack';
import PropTypes from "prop-types";
import {Container} from "@material-ui/core";

const Message = (props: any) => {
    const _messages = useSelector((state: AppState) => state.messages);
    const messages: Array<messageObj> = _messages ? _messages['messageArray'] : [];
    //const messages: Array<messageObj> = props.messages !== undefined ? props.messages : [];
    console.log("messages", messages)
    const {enqueueSnackbar} = useSnackbar();

    console.log("rendering")
    const addMessage = (message: string, variant: VariantType) => {
        console.log("add message")
        enqueueSnackbar(message, {variant})
    }

    return (
        <div>
            {messages !== null && messages.length > 0 && (<div>
                {messages.map((item, index) => {
                    return <Container>
                        <div key={item.id} style={{margin: '20px'}} className={`alert alert-${item.alertType}`}>
                            {item.message}
                        </div>
                    </Container>
                    //enqueueSnackbar(messages[0].message);
                })}
            </div>)}
            {/*{messages[0].message}*/}
            {/*{messages.length !== 0 && (messages.map((msg, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            {addMessage(msg.message, msg.alertType)};*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*))*/}
            {/*}*/}
        </div>
    )
}

Message.propTypes =
    {
        alerts: PropTypes.array.isRequired,
    }
;

const mapStateToProps = (state: any) => (
    {
        messages: state.messageArray,
    }
);

export default connect(mapStateToProps)(Message);
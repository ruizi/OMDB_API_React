import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import {SnackbarProvider} from "notistack";
import {theme} from "./theme/myTheme";
import {ThemeProvider} from "@material-ui/core/styles";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <SnackbarProvider maxSnack={3}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

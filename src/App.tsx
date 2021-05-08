import React, {useEffect} from 'react';
import './App.css';
import SearchMovieInput from "./components/SearchMovieInput";
import SearchResults from "./components/SearchResults";
import NominatedMovies from "./components/NominatedMovies";

import {Container, Grid} from '@material-ui/core';

import Navbar from "./layout/Navbar";
import Message from "./layout/Message";
import {loadNominatedMovies} from "./actions/movieAction";
import {useDispatch} from "react-redux";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        loadNominatedMovies(dispatch);
    });


    return (
        <React.Fragment>
            <Navbar/>
            <Message/>
            <Container style={{minWidth: '300px',padding:'0px'}}>
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <SearchMovieInput/>
                </div>
                <div style={{justifyContent: 'center', display: 'flex'}}>
                    <Grid container>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <SearchResults/>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <NominatedMovies/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default App;

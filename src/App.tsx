import React from 'react';
import './App.css';
import SearchMovieInput from "./components/SearchMovieInput";
import SearchResults from "./components/SearchResults";
import NominatedMovies from "./components/NominatedMovies";
import {theme} from "./theme/myTheme";
import {
    Box,
    Container,
    Grid
} from '@material-ui/core';
import {ThemeProvider} from "@material-ui/core/styles";
import Navbar from "./layout/Navbar";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Navbar/>
            </div>
            <Container style={{width: "100%"}}>

                <Grid style={{width: "100%"}} >
                    <Container style={{width: "100%"}}>
                        <Grid item lg={12} sm={12} xl={12} xs={12}>
                            <SearchMovieInput/>
                        </Grid>
                    </Container>
                    <Container style={{width: "100%"}}>
                        <Grid container spacing={2}>
                            <Grid item lg={6} sm={6} xl={6} xs={12}>
                                <SearchResults/>
                            </Grid>
                            <Grid item lg={6} sm={6} xl={6} xs={12}>
                                <NominatedMovies/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default App;

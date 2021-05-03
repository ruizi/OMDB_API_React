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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Grid>
                <Container maxWidth={false}>
                    <Grid item lg={8} sm={6} xl={3} xs={12}>
                        <SearchMovieInput/>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item lg={4} sm={6} xl={3} xs={12}>
                            <SearchResults/>
                        </Grid>
                        <Grid item lg={4} sm={6} xl={3} xs={12}>
                            <NominatedMovies/>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </ThemeProvider>
    );
}

export default App;

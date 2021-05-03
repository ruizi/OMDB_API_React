import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getMovies} from "../actions/movieAction";
import Button from '@material-ui/core/Button';
import {Box, Card, CardContent, Grid, Input, InputAdornment, InputLabel, SvgIcon, TextField} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import {theme} from "../theme/myTheme";
import SearchIcon from '@material-ui/icons/Search';

const SearchMovieInput = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();

    const submitInput = async (event: React.SyntheticEvent) => {
        event.preventDefault();

        await getMovies(movieTitle, dispatch);
        setMovieTitle('');
    }

    return (
        <React.Fragment>
            <Box>
                <Card style={{marginTop:"20px"}}>
                    <form onSubmit={submitInput}>
                        <CardContent>
                            <Grid container spacing={3}>
                            <Grid item lg={8} sm={8} xl={3} xs={12}>
                                <Box style={{maxWidth: 600}}>
                                    <TextField
                                        required
                                        label="movie title"
                                        fullWidth
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SvgIcon
                                                        fontSize="small"
                                                        color="action"
                                                    >
                                                        <SearchIcon/>
                                                    </SvgIcon>
                                                </InputAdornment>
                                            )
                                        }}
                                        onChange={(event) => {
                                            setMovieTitle(event.target.value)
                                        }}
                                        placeholder="Search a movie"
                                        variant="outlined"
                                    />
                                    <Button variant="contained" color="primary" type="submit" value="Submit"
                                            style={{textTransform: 'none',float:'left',marginTop:"10px"}}>Search</Button>
                                </Box>
                            </Grid>
                            <Grid>
                                <Box>

                                </Box>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </form>
                </Card>
            </Box>
        </React.Fragment>
    );
}

export default SearchMovieInput;
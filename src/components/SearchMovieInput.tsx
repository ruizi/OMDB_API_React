import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getMovies} from "../actions/movieAction";
import Button from '@material-ui/core/Button';
import {Box, Card, CardContent, Grid, InputAdornment, SvgIcon, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchMovieInput = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();

    const submitInput = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        await getMovies(movieTitle, 1, dispatch);
    }

    return (
        <div style={{margin: "20px",width:'100%'}}>
            <React.Fragment>
                <Box>
                    <Card style={{marginTop: "20px"}}>
                        <form onSubmit={submitInput}>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={12} sm={12} xl={12} xs={12}>
                                        <Box style={{width: "100%"}}>
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
                                                value={movieTitle}
                                            />
                                            <Button variant="contained" color="primary" type="submit" value="Submit"
                                                    style={{
                                                        textTransform: 'none',
                                                        float: 'left',
                                                        marginTop: "10px"
                                                    }}>Search</Button>
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
        </div>
    );
}

export default SearchMovieInput;
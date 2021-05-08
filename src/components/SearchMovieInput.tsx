import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getMovies} from "../actions/movieAction";
import Button from '@material-ui/core/Button';
import {
    Box,
    Card,
    CardContent,
    Grid,
    InputAdornment,
    InputLabel, MenuItem,
    NativeSelect, Select,
    SvgIcon,
    TextField
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const SearchMovieInput = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieLeaseYear, setMovieLeaseYear] = useState('');
    const dispatch = useDispatch();

    const submitInput = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        await getMovies(movieTitle, 1, movieLeaseYear, dispatch);
    }

    const buildOptions = () => {
        const arr = [];
        arr.push(<option key={1900} value="blank">----</option>)
        const end = new Date().getFullYear();
        for (let i = 1960; i <= end; i++) {
            arr.push(<option key={i} value={i}>{i}</option>)
        }
        return arr;
    }

    const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovieLeaseYear(event.target.value);
    };


    return (
        <div style={{margin: "20px", width: '100%'}}>
            <React.Fragment>
                <Box>
                    <Card style={{marginTop: "20px"}}>
                        <form onSubmit={submitInput}>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
                                        <div style={{width: '100%', marginTop: '5px', marginRight: '5px'}}>
                                            <TextField required label="movie title" fullWidth InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <SvgIcon fontSize="small" color="action"><SearchIcon/>
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
                                        </div>
                                    </Grid>
                                    <Grid item xl={3} lg={3} md={3} sm={6} xs={6}>
                                        <div style={{width: '100%', marginTop: '5px', marginRight: '5px'}}>
                                            <TextField
                                                id="outlined-select-currency-native"
                                                select
                                                label="Lease year"
                                                value={movieLeaseYear}
                                                onChange={handleYearChange}
                                                SelectProps={{
                                                    native: true,
                                                }}
                                                defaultValue="Default Value"
                                                fullWidth
                                                variant="outlined"
                                            >
                                                {buildOptions()}
                                            </TextField>
                                        </div>
                                    </Grid>
                                    <Grid item xl={2} lg={2} sm={6} xs={6}>
                                        <div style={{width: '100%'}}>
                                            <Button variant="contained" color="primary" type="submit"
                                                    value="Submit"
                                                    style={{
                                                        textTransform: 'none',
                                                        float: 'left',
                                                        marginTop: "10px"
                                                    }}>Search</Button>
                                        </div>
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
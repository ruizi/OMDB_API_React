import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import React from "react";
import {addNomination, getMovies, Movie} from "../actions/movieAction";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {
    Card,
    CardHeader,
    Divider,
    IconButton,
    Typography
} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {AddMessage} from "../actions/MessageAction";

const SearchResults = () => {
    const _movies = useSelector((state: AppState) => state.movies);
    const movies: Array<Movie> = _movies['movieSearched'];
    const nominations: Array<Movie> = _movies['movieNominated'];
    const {
        pageNum,
        pageSize,
        totalResults,
        searchInput,
        movieLeaseYear
    } = useSelector((state: AppState) => state.movies);
    const dispatch = useDispatch();
    //const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const onClickNextPage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (pageNum * pageSize >= totalResults) {
            AddMessage("Last page", 'info', dispatch);
        } else {
            await getMovies(searchInput, pageNum + 1, movieLeaseYear, dispatch);
        }

    }

    const onClickPrePage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (pageNum === 1) {
            AddMessage("First page", 'info', dispatch);
        } else {
            await getMovies(searchInput, pageNum - 1, movieLeaseYear, dispatch);
        }

    }

    const renderNominationButton = (mov: Movie) => {
        if (nominations.length < 5) {
            if (!nominations.some((item) => {
                return item.imdbID === mov.imdbID
            })) {
                return (
                    <Button variant="contained" color="primary" style={{textTransform: 'none'}}
                            onClick={() => addNomination(mov, dispatch)}>Nominate</Button>
                )
            }
        } else {
            AddMessage("Well done! 5 movies nominated :)", 'success', dispatch);
            return null;
        }
    }

    const cardHeaderText = (): String => {
        if (searchInput !== "") {
            return `Results for "${searchInput}"`
        } else {
            return "Results"
        }
    }

    // const msgSuccess = () => {
    //     enqueueSnackbar('Success get data from API');
    // }

    return (
        <div style={{margin: "20px"}}>
            <React.Fragment>
                <Card style={{marginTop: "20px"}}>
                    <div slot="header" style={{textAlign: 'left'}}>
                        <CardHeader
                            title={cardHeaderText()}
                            action={
                                <div style={{justifyContent: 'space-between', display: 'flex'}}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Typography align="center">
                                            {`${pageNum} / ${Math.floor((totalResults / pageSize) + 1)} - ${totalResults}`}
                                        </Typography>
                                    </div>
                                    <div style={{}}>
                                        <IconButton color="primary" onClick={onClickPrePage} aria-label="pre page">
                                            <ArrowBackIcon/>
                                        </IconButton>
                                    </div>
                                    <div style={{}}>
                                        <IconButton color="primary" onClick={onClickNextPage} aria-label="next page">
                                            <ArrowForwardIcon/>
                                        </IconButton>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                    <Divider/>
                    {movies.length !== 0 && (
                        <List>
                            {movies.map((mov, index) => (
                                <ListItem
                                    divider={index < movies.length - 1}
                                    key={mov.imdbID}
                                >
                                    <ListItemAvatar>
                                        <Avatar src={mov.poster}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={mov.title}
                                        secondary={`Posted on ${mov.yearOfLease}`}
                                    />
                                    <ListItemSecondaryAction>
                                        {renderNominationButton(mov)}
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>)}
                </Card>
            </React.Fragment>
        </div>

    );

};
export default SearchResults;
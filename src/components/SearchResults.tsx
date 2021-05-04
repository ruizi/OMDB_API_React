import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import React from "react";
import {addNomination, Movie} from "../actions/movieAction";


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MovieIcon from '@material-ui/icons/Movie';
import Button from '@material-ui/core/Button';
import {Card, CardHeader, Divider} from "@material-ui/core";

const SearchResults = () => {
    const _movies = useSelector((state: AppState) => state.movies);
    const movies: Array<Movie> = _movies['movieSearched'];
    const nominations: Array<Movie> = _movies['movieNominated'];
    const dispatch = useDispatch();

    const renderButton = (mov: Movie) => {
        if (nominations.length < 5 && !nominations.some((item) => {
            return item === mov;
        })) {
            return (
                <Button variant="contained" color="primary" style={{textTransform: 'none'}}
                        onClick={() => addNomination(mov, dispatch)}>Nominate</Button>
            )
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            <Card style={{marginTop: "20px"}}>
                <CardHeader
                    // subtitle={`${products.length} in total`}
                    title="Results"
                    style={{textAlign: "left"}}
                />
                <Divider/>
                {movies.length !== 0 && (<List>
                    {movies.map((mov, index) => (
                        <ListItem
                            divider={index < movies.length - 1}
                            key={mov.imdbID}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <MovieIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={mov.title}
                                secondary={`Posted on ${mov.yearOfLease}`}
                            />
                            <ListItemSecondaryAction>
                                {renderButton(mov)}
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>)}

            </Card>

        </React.Fragment>
    );

}
export default SearchResults;
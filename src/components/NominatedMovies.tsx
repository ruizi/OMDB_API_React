import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store/AppState";
import {Movie, removeNomination} from "../actions/movieAction";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MovieIcon from '@material-ui/icons/Movie';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {Card, CardHeader, Divider, Icon} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';

const NominatedMovies = () => {
    const _movies = useSelector((state: AppState) => state.movies);
    const dispatch = useDispatch();
    const nominations: Array<Movie> = _movies['movieNominated'];

    return (
        <React.Fragment>
            <Card style={{marginTop: "20px"}}>
                <CardHeader
                    // subtitle={`${products.length} in total`}
                    title="Nominated Movies"
                    style={{textAlign: "left"}}
                />
                <Divider/>
                {nominations.length !== 0 && (
                    <List>
                        {nominations.map((mov, index) => (
                            <ListItem
                                divider={index < nominations.length - 1}
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
                                    <Button variant="contained" color="secondary" style={{textTransform: 'none'}}
                                            onClick={() => removeNomination(mov, dispatch)}>
                                        Remove
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>)}
            </Card>
        </React.Fragment>
    )
}

export default NominatedMovies;
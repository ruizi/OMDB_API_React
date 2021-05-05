import {AppBar, Icon, Toolbar, Typography} from "@material-ui/core";
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const Navbar = () => {
    return (
        <AppBar position="static"
                elevation={0}
        >
            <Toolbar style={{height: 20}}>
                <Icon>
                    <TrackChangesIcon/>
                </Icon>

                <Typography variant="h3" color="inherit">
                    &nbsp; The Shoppies
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import AddingRowsView from './AddingRowsView';
import './stylesheet.css';


const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

/**
 * View Component of Intial LoggedIn Page
 */
const LoginView = ({ handleDisplayRepos, list = [], repos = [], displayCard }) => {
    const classes = useStyles();
    return (
        <div className="container">
            <List>
                {list && list.length > 0 ? list.map((user, index) => {
                    return (
                        <React.Fragment>
                            <ListItem alignItems="flex-start" onClick={handleDisplayRepos}
                                {...{ id: `ITEM_${index}`, itemId: user.id, key: index }}
                            >
                                <ListItemAvatar className="images">
                                    <Avatar alt="Image" src={user.avatar_url} style={{
                                        width: '80px',
                                        height: '85px',
                                    }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {user.login}
                                            </Typography>
                                            <br />
                                            {`Followers: ${user.followers} Following: ${user.following}`}
                                            <br />
                                            {`Location: ${user.location}`}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Collapse in={displayCard}>
                                <AddingRowsView repos={repos} />
                            </Collapse>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>)
                }) : null}
            </List>
        </div>
    );
}

export default LoginView;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const RepoCardView = ({ data }) => {
    const classes = useStyles();

    return (
        <Card style={{ margin: '2%', width: '30%' }}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {data.name}
                </Typography>
                <Typography variant="h6" component="h2">
                    {data.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {`language: ${data.language}`}
                </Typography>
                <Typography variant="body2" component="p">
                    {data.description}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Commits</Button>
            </CardActions>
        </Card>
    );
}

export default RepoCardView;
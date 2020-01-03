import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    paper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        height: "95vh",
        margin: theme.spacing(2)
    }
}));

const App = props => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant="h4">Hello World!!!</Typography>
            </Paper>
        </div>
    );
};

export default App;
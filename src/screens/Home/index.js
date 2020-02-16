import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import NavBar from '../../shared/NavBar/index';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';


const Home = () => {
    const classes = styles();
    return (
        <Typography className={classes.mainTitle} variant="h2" color="primary" component="p">
            <span>Ready to </span> 
            <span>land your </span>
            <span>dream </span>
            <span>internship?</span>
        </Typography>
    );
};

const styles = makeStyles(theme => ({
    mainTitle: {
        marginLeft: '230px',
        marginTop: '213px',
        width: '300px',
        '& span': {
            display: 'inline-block'
        }
    }
}));

export default Home;
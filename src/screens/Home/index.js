import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import NavBar from '../../shared/NavBar/index';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';


const Home = () => {
    const classes = styles();
    return (
            <MuiThemeProvider theme={theme}>
                <Typography className={classes.mainTitle} variant="h2" color='secondary' component="p">Ready to land your dream internship?</Typography>
            </MuiThemeProvider>
    );
};

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
            main: '#BB86FC',
        },
    },
});

const styles = makeStyles(theme => ({
    menuBar: {
        // Ensures buttons are right-aligned
        marginLeft: 'auto'
    },
    mainTitle: {
        marginLeft: '230px',
        marginTop: '213px',
        width: '300px',
    },
    root: {
        background: '#F1F1F1',
    }
}));

export default Home;
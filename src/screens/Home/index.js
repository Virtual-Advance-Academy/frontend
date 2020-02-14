import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import NavBar from '../../shared/NavBar/index';
import Typography from '@material-ui/core/Typography';
import ColorScheme from '../../shared/ColorScheme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';


const Home = () => {
    // const classes = styles();
    return (
        <ColorScheme>
            <MuiThemeProvider theme={theme}>
                <Typography variant="h2" color='secondary' component="p">Ready to land your dream internship?</Typography>
            </MuiThemeProvider>
        </ColorScheme>
    );
};

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
            main: '#BB85F9',
        },
    },
});

const styles = makeStyles(theme => ({
    menuBar: {
        // Ensures buttons are right-aligned
        marginLeft: 'auto'
    },
}));

export default Home;
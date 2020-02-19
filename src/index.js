import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary:{
            main: '#BB86FC',
            dark: '#BB86FC'
        }
    }
});

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

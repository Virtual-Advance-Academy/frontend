import React, { setGlobal, addReducer } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
    ThemeProvider,
    CssBaseline,
    responsiveFontSizes,
    Button
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import { appState, extractUser } from "config/appConfig";

const darkTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#BB86FC"
            },
            secondary: {
                main: "#03DAC6"
            }
        }
    })
);

const notistackRef = React.createRef();
const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
};

setGlobal(appState);
addReducer("openDrawer", (global, dispatch, drawer) => {
    switch (drawer) {
        case "menu":
            return {
                menuDrawer: true
            };
        case "user":
            return {
                userDrawer: true
            };
        default:
            return {
                menuDrawer: true,
                userDrawer: true
            };
    }
});
addReducer("closeDrawer", (global, dispatch, drawer) => {
    switch (drawer) {
        case "menu":
            return {
                menuDrawer: false
            };
        case "user":
            return {
                userDrawer: false
            };
        default:
            return {
                menuDrawer: false,
                userDrawer: false
            };
    }
});
addReducer("login", (global, dispatch, jwt) => {
    let user = extractUser(jwt);
    window.localStorage.setItem("jwt", jwt);
    return {
        user,
        jwt
    };
});
addReducer("logout", (global, dispatch) => {
    window.localStorage.removeItem("jwt");
    return {
        user: undefined,
        jwt: undefined
    };
});

ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SnackbarProvider
            ref={notistackRef}
            action={(key) => (
                <Button
                    onClick={onClickDismiss(key)}
                    color="secondary"
                    size="small"
                >
                    Dismiss
                </Button>
            )}
        >
            <App />
        </SnackbarProvider>
    </ThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

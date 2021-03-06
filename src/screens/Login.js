import React, { useState, useGlobal, useDispatch } from "reactn";
import { makeStyles } from "@material-ui/core/styles";
import {
    Typography,
    Grid,
    IconButton,
    InputAdornment,
    Button
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form } from "react-final-form";
import { TextField, makeValidate, makeRequired } from "mui-rff";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import { Redirect } from "react-router-dom";
import { makeClient } from "utils/Client";
import Helmet from "react-helmet";

const Login = () => {
    const classes = styles();

    return (
        <Grid container className={classes.loginContainer}>
            <Grid container justify="center" alignItems="center">
                <Grid item className={classes.titleSpacing}>
                    <Typography
                        className={classes.mainTitle}
                        variant="h2"
                        color="primary"
                        component="p"
                    >
                        <span>Login </span>
                    </Typography>
                </Grid>
                <LoginForm />
            </Grid>
        </Grid>
    );
};

const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [form, setForm] = useState({});
    const [jwt] = useGlobal("jwt");
    const Client = makeClient(jwt);
    const login = useDispatch("login");

    const { enqueueSnackbar } = useSnackbar();

    const schema = Yup.object().shape({
        username: Yup.string().min(3).required().label("Username/Email"),
        password: Yup.string().min(8).required().label("Password")
    });

    const validator = makeValidate(schema);
    const required = makeRequired(schema);

    const togglePass = () => {
        showPass ? setShowPass(false) : setShowPass(true);
    };

    const handleData = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        try {
            const res = await Client.authUser(form);
            login(res.data.token);
        } catch (e) {
            let errorMsg =
                e.response && e.response.data
                    ? e.response.data.message
                    : e.toString();
            enqueueSnackbar(errorMsg);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {jwt && <Redirect to="/modules" />}
            <Form
                onSubmit={loginUser}
                validate={validator}
                initialValues={form}
                render={({ handleSubmit, submitting }) => (
                    <Grid
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        container
                        item
                        direction="column"
                        xs={10}
                        md={3}
                        lg={2}
                        spacing={2}
                    >
                        <Grid item>
                            <TextField
                                label="Username or Email"
                                name="username"
                                value={form.username || ""}
                                variant="outlined"
                                size="small"
                                required={required.username}
                                onChange={handleData}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="password"
                                name="password"
                                required={required.password}
                                type={showPass ? "text" : "password"}
                                label="Password"
                                variant="outlined"
                                fullWidth
                                size="small"
                                onChange={handleData}
                                value={form.password || ""}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={togglePass}
                                                // onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPass ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item justify="flex-end" container>
                            <Button
                                variant="outlined"
                                type="submit"
                                color="primary"
                                size="small"
                                disabled={submitting}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                )}
            />
        </>
    );
};

const styles = makeStyles((theme) => ({
    mainTitle: {
        display: "inline-block",
        "& span": {
            display: "block"
        }
    },
    titleSpacing: {
        marginRight: "80px",
        [theme.breakpoints.down("xs")]: {
            marginRight: "unset"
        }
    },
    loginContainer: {
        minHeight: "90vh"
    }
}));

export default Login;

import React, { useState } from "react";
import { Grid, Button, IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form } from "react-final-form";
import { TextField, makeValidate, makeRequired } from "mui-rff";
import axios from "axios";
import * as Yup from "yup";
import config from "config/appConfig";

const HomeRegister = () => {
    const [showPass, setShowPass] = useState(false);
    const [form, setForm] = useState({});

    const schema = Yup.object().shape({
        username: Yup.string()
            .min(3)
            .max(15)
            .required()
            .matches(
                /^[a-zA-Z0-9_]+$/,
                "Usernames may only contain numbers, letters, and underscores"
            ),
        fullName: Yup.string().required(),
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(8)
            .required()
    });

    const validator = makeValidate(schema);
    const required = makeRequired(schema);

    const togglePass = () => {
        showPass ? setShowPass(false) : setShowPass(true);
    };

    const handleData = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const registerUser = async () => {
        console.log("Values: ", form);
        try {
            const res = await axios.post(config.API_ENDPOINTS.USERS, form);
        } catch (e) {
            console.log(e);
            console.log(e.response);
        }

    };

    return (
        <Form
            onSubmit={registerUser}
            initialValues={form}
            validate={validator}
            subscription={{ submitting: true, pristine: true }}
            render={({ handleSubmit, submitting }) => (
                <Grid
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    item
                    container
                    direction="column"
                    xs={10}
                    sm={2}
                    spacing={2}
                >
                    <Grid item>
                        <TextField
                            id="username"
                            name="username"
                            required={required.username}
                            label="Username"
                            variant="outlined"
                            fullWidth
                            size="small"
                            onChange={handleData}
                            value={form.username || ""}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="fullName"
                            name="fullName"
                            required={required.fullName}
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            size="small"
                            onChange={handleData}
                            value={form.fullName || ""}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            name="email"
                            required={required.email}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            onChange={handleData}
                            value={form.email || ""}
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
                            Create Account
                        </Button>
                    </Grid>
                </Grid>
            )}
        />
    );
};

export default HomeRegister;

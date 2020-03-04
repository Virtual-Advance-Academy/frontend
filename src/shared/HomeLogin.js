import React, { useState } from "react";
import {
    TextField,
    Grid,
    Button,
    IconButton,
    InputAdornment
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const HomeLogin = () => {
    const [showPass, setShowPass] = useState(false);
    const [form, setForm] = useState({});

    const togglePass = () => {
        showPass ? setShowPass(false) : setShowPass(true);
    };

    const handleData = e => {
        const { name } = e.target;
        form[name] = e.target.value;
        setForm(form);
    };

    const registerUser = (e, values, pristineValues) => {
        e.preventDefault();
        console.log("Values: ", form);
        console.log("Values (Pristine): ", pristineValues);
    };

    return (
        <Grid
            component="form"
            onSubmit={registerUser}
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
                    label="Username"
                    variant="outlined"
                    fullWidth
                    size="small"
                    onChange={e => handleData(e)}
                    value={form.username}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    onChange={handleData}
                    value={form.fullName}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    onChange={handleData}
                    value={form.email}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    size="small"
                    onChange={handleData}
                    value={form.password}
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
                >
                    Create Account
                </Button>
            </Grid>
        </Grid>
    );
};

export default HomeLogin;

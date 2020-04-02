import axios from "axios";
import { config } from "config/appConfig";

const makeClient = (jwt) => {
    const auth = { headers: { Authorization: `Bearer ${jwt}` } };

    const getProfile = async () => {
        return axios.get(config.API_ENDPOINTS.PROFILE, auth);
    };

    const authUser = async (login) => {
        return axios.post(config.API_ENDPOINTS.AUTH, login);
    };

    const registerUser = async (registration) => {
        return axios.post(config.API_ENDPOINTS.USERS, registration);
    };

    const Client = {
        getProfile,
        authUser,
        registerUser
    };

    return Client;
};

export { makeClient };

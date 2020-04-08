const LIVE_API_URL = "https://job-internship-api.azurewebsites.net";
const LOCAL_API_URI = "http://localhost:3030";
const API_URL =
    process.env.NODE_ENV === "production" ? LIVE_API_URL : LOCAL_API_URI;
const config = {
    API_URL,
    API_ENDPOINTS: {
        USERS: `${API_URL}/users`,
        AUTH: `${API_URL}/users/auth`,
        PROFILE: `${API_URL}/users/profile`,
        SURVEY: `${API_URL}/users/survey`
    }
};

const extractUser = (jwt) => {
    try {
        return JSON.parse(atob(jwt.split(".")[1]));
    } catch (e) {
        return null;
    }
};

const appState = {
    user: extractUser(window.localStorage["jwt"]) || undefined,
    jwt: window.localStorage["jwt"] || undefined,
    menuDrawer: false,
    userDrawer: false
};
export { config, appState, extractUser };

const LIVE_API_URL = "https://job-internship-api.azurewebsites.net";
const LOCAL_API_URI = "http://localhost:3030";
const API_URL =
    process.env.NODE_ENV === "production" ? LIVE_API_URL : LOCAL_API_URI;
const config = {
    API_URL,
    API_ENDPOINTS: {
        USERS: `${API_URL}/users`,
        AUTH: `${API_URL}/users/auth`
    }
};
const appState = {
    user: null
};
export { config, appState };

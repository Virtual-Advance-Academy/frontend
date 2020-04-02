import React, { useGlobal } from "reactn";
import { Redirect } from "react-router-dom";

const AuthorizedRoute = () => {
    const [jwt] = useGlobal("jwt");
    return <>{!jwt && <Redirect to="/login" />}</>;
};

export default AuthorizedRoute;

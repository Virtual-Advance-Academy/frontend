import React, { useGlobal } from "reactn";
import { Redirect } from "react-router-dom";

const withAuthentication = (ComponentToEnhance) => {
    return () => {
        const [jwt] = useGlobal("jwt");
        return <>{!jwt ? <Redirect to="/login" /> : <ComponentToEnhance />}</>;
    };
};

export default withAuthentication;

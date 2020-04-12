import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Page = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};

export default Page;

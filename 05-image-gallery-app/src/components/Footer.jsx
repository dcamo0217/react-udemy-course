import React from "react";

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-primary text-center">
            <span className="">
                Diego Cavadia - &copy; {new Date().getFullYear()}
            </span>
        </nav>
    );
};

export default Footer;

import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = () => {

    return (
        <footer className={classes.footer}>
            <p>LimpaSalvador &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default MainFooter;

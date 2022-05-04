import React from "react";
import logo from "../images/logo.svg"

export default function Footer() {
    return (
         <footer>
            <div className="container">
                <img src={logo} alt="logo" />
                <a href="mailto:jaycedam@gmail.com">
                    jaycedam@gmail.com
                </a>
            </div>
        </footer>
       
    )
}
import React from "react";

import SearchBox from "../searchbox/searchbox.component";
import './navbar.style.scss';

const Navbar = () => (
    <div className="nav-bar">
        <span>Logo</span>
        <SearchBox />
    </div>
);

export default Navbar;
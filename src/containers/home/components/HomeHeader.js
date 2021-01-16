import React from "react";

import "../styles/homeHeader.css";

const HomeHeader = () => {

    return (
        <>
            <header>

                <div className="headerBar">
                    <h4 className="notionAppLogo">
                        NotionApp
                    </h4>
                    <div className="searchBoxContainer">
                        <input type="search" placeholder="Search for ..." className="searchBox"/>
                    </div>
                    <h4 className="menuRight">MENU</h4>
                </div>
            </header>
        </>
    );
};

export default HomeHeader;

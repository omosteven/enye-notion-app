import React from "react";

import "../style/profileHeader.css";

const ProfileHeader = (props) => {

    return (
        <>
            <header>

                <div className="headerBar">
                    <h4 className="notionAppLogo">
                        NotionApp
                    </h4>
                    <div className="searchBoxContainer">
                    </div>
                    <h4 className="menuRight">MENU</h4>
                </div>
            </header>
        </>
    );
};

export default ProfileHeader;

import React from "react";

import ProfileBody from "./components/ProfileBody";

import ProfileHeader from "./components/ProfileHeader";

import HomeFooter from "../home/components/HomeFooter";

const ProfileScreen = () => {

    return (
        <>
            <ProfileHeader/>
            <ProfileBody/>
            <HomeFooter/>
        </>
    )
};

export default ProfileScreen;

import React, {useState, useEffect} from "react";

import {useLocation} from "react-router-dom";

import ProfileEmbedded from "./ProfileEmbedded";

import "../style/profileBody.css";

const ProfileBody = () => {

    const location = useLocation();

    const [profileData, setProfileData] = useState({FirstName: "User", LastName: "Not Found"});

    useEffect(() => {

        const profileUserName = location.hash.substr(1);

        const profiles = JSON.parse(localStorage.getItem("profiles"));

        profiles.map(eachProfile => {
            if (eachProfile["UserName"] === profileUserName) {
                setProfileData(eachProfile);
            }
            return eachProfile;
        })

    }, [])
    return (
        <>

            <div className="profileBody">
                <section className="profileBodyLeft">
                    <div className="profileBodyLeft__card">
                        <div className="center__profile__icon">
                            <i className="fa fa-user-circle fa-5x profile--icon--side"></i>
                        </div>
                        <h3 style={
                            {
                                textAlign: "center",
                                color: "rgb(35, 89, 114)",
                                fontWeight: "bold"
                            }
                        }>
                            {
                            profileData.FirstName + " " + profileData.LastName
                        }</h3>
                    </div>
                </section>
                <section className="profileBodyRight">
                    <ProfileEmbedded profileData={profileData}/>
                </section>

            </div>
        </>
    )
}
export default ProfileBody;

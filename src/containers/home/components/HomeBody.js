import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

import {Ripple} from "react-preloaders";

import AOS from "aos";

import "aos/dist/aos.css";

import {fetchApi} from "../../utility/fetchApi";

import "../styles/homeBody.css";

import ProfileEmbedded from "../../profile/components/ProfileEmbedded";

// import "bootstrap/dist/css/bootstrap.min.css";


const HomeBody = () => {
    AOS.init();

    const [allProfiles, setAllProfiles] = useState([]);

    const [hidePreloader, setHidePreloader] = useState(false);

    const [firstUserProfile, setFirstUserProfile] = useState({});

    const fetchUrl = "https://api.enye.tech/v1/challenge/records";

    useEffect(() => {
        (async () => {
            const {isError, data, errorMessage} = await fetchApi({}, "GET", fetchUrl);

            if (isError) {
                console.log("error", errorMessage);

            } else {

                const profiles = data.records.profiles;

                // const noOfProfiles = data.records.size;

                setAllProfiles(profiles);

                setHidePreloader(false);

                setFirstUserProfile(profiles[0]);

                localStorage.setItem("profiles", JSON.stringify(profiles))

            }
        })();
    }, []);


    return (
        <>
            <Ripple color={"rgb(0, 68, 72)"}
                background="white"
                customLoading={hidePreloader}/>

            <div className="bodyContainer" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">

                <section className="bodyTopBar">
                    <h5 className="bodyTopBar__profileText">PROFILES</h5>
                    <div className="bodyTopBar__right">
                        <h5 className="bodyTopBar__filterText">Filter</h5>
                        <select className="bodyTopBar__select">
                            <option>Gender</option>
                            <option>Payment method</option>
                            <option>Credit card type</option>

                        </select>
                    </div>
                </section>

                <div className="bodyLeftRight">
                    <section className="bodyLeft">
                        <div className="bodyLeft__container">
                            {
                            allProfiles.map(eachCardProfile => (
                                <div className="bodyLeft__card">
                                    <h3 className="bodyLeft__card__title">
                                        {
                                        eachCardProfile.FirstName + " " + eachCardProfile.LastName
                                    }</h3>
                                    <h5 className="bodyLeft__card__gender">
                                        {
                                        eachCardProfile.Gender
                                    }</h5>
                                    <div className="bodyLeft__card__below">
                                        <i className="fa fa-user-circle fa-2x"></i>
                                        <h5>{
                                            eachCardProfile.Email
                                        }</h5>
                                        {/* <i className="fa fa-calender fa-2x"></i> */} </div>
                                    <div className="cardLink">
                                        <Link className="card__link" to={"/profile/#"+ eachCardProfile.UserName} >View Profile</Link>

                                    </div>
                                </div>
                            ))
                        } </div>
                        <div className="bodyLeft__nav">
                            <div style={
                                {marginTop: "0.5em"}
                            }>
                                <i className="fa fa-arrow-left"></i>
                                <span style={
                                    {
                                        marginLeft: "0.5em",
                                        marginRight: "0.5em"
                                    }
                                }>Previous.</span>
                                <span style={
                                    {
                                        marginLeft: "0.5em",
                                        marginRight: "0.5em"
                                    }
                                }>Next.</span>
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </div>
                    </section>

                    <section className="bodyRight">
                        <ProfileEmbedded profileData={firstUserProfile}/>
                    </section>
                </div>

            </div>

        </>
    );
};

export default HomeBody;

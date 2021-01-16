import React, {useState, useEffect} from "react";

import {Helmet} from "react-helmet";

import "../style/profileEmbedded.css";

const ProfileEmbedded = (props) => {

    const [firstDropDown, setFirstDropDown] = useState(false);

    const [secondDropDown, setSecondDropDown] = useState(false);

    const [thirdDropDown, setThirdDropDown] = useState(false);

    const [profileData, setProfileData] = useState({FirstName: "User", LastName : "Not Found"});

    useEffect(() => {
        if (props ?. profileData) {
            setProfileData(props.profileData);

        } 
        // else {
        //     const profileUserName = location.hash.substr(1);
        //     const profiles = JSON.parse(localStorage.getItem("profiles"));
        //     profiles.map(eachProfile => {
        //         if (eachProfile["UserName"] === profileUserName) {
        //             setProfileData(eachProfile);
        //         }
        //     })
        // }

    }, [props])
    return (
        <>

            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Helmet>
            <div className="profileEmbedded">
                <div className="profileIcon">
                    <i className="fa fa-user-circle fa-5x profile--icon"></i>
                    <h3 className="profileName">
                        {
                        profileData.FirstName + " " + profileData.LastName
                    }</h3>
                    <h5 style={
                        {marginTop: "-0.8em"}
                    }>
                        <i className="fa fa-star icon--star"></i>
                        <i className="fa fa-star icon--star"></i>
                        <i className="fa fa-star icon--star"></i>
                        <i className="fa fa-star icon--star"></i>
                        <i className="fa fa-star icon--star"></i>
                    </h5>
                    <h4 className="profileUserName">
                        {
                        profileData.UserName
                    }</h4>

                </div>

                <div className="profileCard">

                    <p className="profileCard__title"
                        onClick={
                            () => (firstDropDown === false ? setFirstDropDown(true) : setFirstDropDown(false))
                    }>
                        <i className="fa fa-info-circle profileCard--icon"></i>
                        PERSONAL INFORMATION
                        <i className="fa fa-arrow-down profileCard--icon2"></i>
                    </p>
                    {
                    firstDropDown && <div className="profileCard__dropdown">
                        <h5 className="profileCard__dropdown__item">Email : {
                            profileData.Email
                        }</h5>

                        <h5 className="profileCard__dropdown__item">Gender : {
                            profileData.Gender
                        }</h5>
                        <h5 className="profileCard__dropdown__item">Phone Number : {
                            profileData.PhoneNumber
                        }</h5>
                    </div>
                } </div>

                <div className="profileCard">

                    <p className="profileCard__title"
                        onClick={
                            () => (secondDropDown === false ? setSecondDropDown(true) : setSecondDropDown(false))
                    }>
                        <i className="fa fa-info-circle profileCard--icon"></i>
                        CREDIT CARD DETAILS
                        <i className="fa fa-arrow-down profileCard--icon2"></i>
                    </p>
                    {
                    secondDropDown && <div className="profileCard__dropdown">
                        <h5 className="profileCard__dropdown__item">Card Number : {
                            profileData.CreditCardNumber
                        }</h5>
                        <h5 className="profileCard__dropdown__item">Card Type : {
                            profileData.CreditCardType
                        }</h5>
                        <h5 className="profileCard__dropdown__item">Payment Method : {
                            profileData.PaymentMethod
                        } </h5>

                    </div>
                } </div>
                <div className="profileCard">

                    <p className="profileCard__title"
                        onClick={
                            () => (thirdDropDown === false ? setThirdDropDown(true) : setThirdDropDown(false))
                    }>
                        <i className="fa fa-info-circle profileCard--icon"></i>
                        DEVICE INFORMATION
                        <i className="fa fa-arrow-down profileCard--icon2"></i>
                    </p>
                    {
                    thirdDropDown && <div className="profileCard__dropdown">
                        <h5 className="profileCard__dropdown__item">Last Login : {
                            profileData.LastLogin
                        } </h5>
                        <h5 className="profileCard__dropdown__item">Mac Address : {
                            profileData.MacAddress
                        } </h5>
                        <h5 className="profileCard__dropdown__item">Domain Name: {
                            profileData.DomainName
                        }</h5>
                        <h5 className="profileCard__dropdown__item">Latitude : {
                            profileData.Latitude
                        }</h5>
                        <h5 className="profileCard__dropdown__item">Longitude : {
                            profileData.Longitude
                        } </h5>
                        <h5 className="profileCard__dropdown__item">URL : {
                            profileData.URL
                        } </h5>
                    </div>
                } </div>
            </div>
        </>
    )
}
export default ProfileEmbedded;

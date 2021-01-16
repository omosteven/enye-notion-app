import React from "react";

import "../styles/homeFooter.css";

const HomeFooter = () => {

    return (
        <>
            <footer className="footer">
                <div className="social__footer">

                    <a href="https://facebook.com/steven.7/" className="facebook social--icon">
                        <span className="fa-stack fa-lg">
                            {/* <i className="fa fa-circle-thin fa-stack-2x"></i> */}
                            <i className="fa fa-facebook fa-stack-1x"></i>
                        </span>
                    </a>

                    <a href="https://twitter.com/yanetwork_org/" className="twitter social--icon">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-twitter fa-stack-1x"></i>
                        </span>
                    </a>
                    <a href="https://instagram.com/yanetwork_org/" className="instagram social--icon">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-instagram fa-stack-1x"></i>
                        </span>
                    </a>

                </div>
                <div className="copy__right__cont">
                    <p className="copy__footer">
                        © 2021 NotionApp. All rights reserved | Designed by Steven Omole-Adebomi
                    </p>
                </div>
            </footer>
        </>
    )
};

export default HomeFooter;

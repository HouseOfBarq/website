import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <div class="cFooter">
                <div class="cFooterLeft">
                    <div class="cFooterLeftMenu">
                        <button class="bSpotify"></button>
                        <button class="bEmail"></button>
                        <button class="bYouTube"></button>
                        <button class="bXTwitter"></button>
                        <button class="bDiscord"></button>
                    </div> {/* cFooterLeftMenu */}
                </div> {/* cFooterLeft */}

                <div class="cFooterRight">
                    <div class="cFooterRightMenu">
                        <Link to="/about" class="bAbout"></Link>
                        <Link to="/contact" class="bContact"></Link>
                        <Link to="/privacy" class="bPrivacy"></Link>
                        <Link to="/termsofservice" class="bToS"></Link>
                        <p class="tCopyright">COPYRIGHT © 2023<br />HOUSE OF BARQ</p>
                    </div> {/* cFooterRightMenu */}
                </div> {/* cFooterRight */}
            </div>); {/* cFooter */ }

    }
}

export default Footer;
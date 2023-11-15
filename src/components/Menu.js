import React from "react";
//import { Link } from "react-router-dom";

import './Menu.css';

import ProfileBorder from './../images/Menu/Profile1.webp'
import ProfileIcon from './../images/Menu/ProfileIconTest.png'

class Menu extends React.Component {
    render() {
        return (

            <div className="cMenu">

                <div className="cMenuTop">
                    <div className="cProfile">
                        <img className="cProfileBorder" src={ProfileBorder} alt="ProfileBorder" />
                        <img className="cProfileIcon" src={ProfileIcon} alt="ProfileIcon" />
                    </div>

                    <div></div>

                    <div className="cMenuTopRight">
                        <div className="tUserName">
                            <p>USERNAME</p>
                        </div>
                        <div className="tMembership">
                            <p>Free Member</p>
                        </div>
                        <div className="cMenuTopRightBottom">
                            <div className="iDashboard"></div>
                            <div className="iUpdate"></div>
                            <div className="iLogin"></div>
                        </div>
                    </div>

                </div> {/* cMenuTop */}

                <div className="cMenuBottom">

                    
                    <button className="cMenuButton bMenuButton1"></button>
                    <button className="cMenuButton bMenuButton2"></button>
                    <button className="cMenuButton bMenuButton3"></button>
                    <button className="cMenuButton bMenuButton4"></button>

                    <button className="cMenuButton bMenuButton5"></button>
                    <button className="cMenuButton bMenuButton6"></button>
                    <button className="cMenuButton bMenuButton7"></button>
                    <button className="cMenuButton bMenuButton8"></button>

                    <button className="cMenuButton bMenuButton9"></button>
                    <button className="cMenuButton bMenuButton10"></button>
                    <button className="cMenuButton bMenuButton11"></button>
                    <button className="cMenuButton bMenuButton12"></button>

                </div> {/* cMenuBottom */}


            </div>); {/* cMenu */}

    }
}

export default Menu
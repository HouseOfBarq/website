import React from "react";
import { Link } from "react-router-dom";

import './Header.css';

class Header extends React.Component {
    render() {
        return (

            <div className="cHeader">
                <div className="cLeft">
                    <button className="bMenu"></button>
                </div> {/* cLeft */}
                <div className="cCenter">
                    <Link to="/" className="bHouseOfBarqTitle"></Link>
                </div> {/* cCenter */}
                <div className="cRight">
                    <div className="cRightMenu">
                        <Link to="/beta" className="bBeta"></Link>
                        <Link to="/search" className="bSearch"></Link>
                        <button className="bLogIn"></button>
                        <Link to="/shop" className="bShop"></Link>
                    </div> {/* cRightMenu */}
                </div> {/* cRight */}
            </div>); {/* cHeader */}

    }
}

export default Header;
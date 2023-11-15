import React from "react";
//import { Link } from "react-router-dom";

import './NewsLatestArticle.css';

class NewsLatestArticle extends React.Component {
    render() {
        return (

            <div className="cLatestNewsArticle1">

                <div className="cNewsRowA">
                    <div className="iNewsAuthor"></div>
                    <div className="tNewsAuthor">ADMIN</div>
                    <div className="tNewsDate">13 APRIL 2023</div>
                </div> {/* cNewsRowA */}
                <div className="tNewsTitle">DIABLO IV OPEN BETA RETROSPECTIVE: TRANSFORMING FEEDBACK INTO CHANGE</div>
                <div className="tNewsTitleDescription">Blizzard talks about a variety of fixes and updates to various systems in
                    Diablo IV, all of which will be present in the version of the game that launches on June 6. </div>
                <div className="cNewsRowD">
                    <div className="iNewsGameLogo"></div>
                    <div className="tNewsGameName">DIABLO IV</div>
                    <div className="tNewsType">PRESS RELEASE</div>
                </div> {/* cNewsRowD */}

            </div>); {/* cLatestNewsArticle */ }

    }
}

export default NewsLatestArticle;
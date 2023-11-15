import React from "react";
//import { Link } from "react-router-dom";

import './GuideLatestArticle.css';

class GuideLatestArticle extends React.Component {
    render() {
        return (

            <div className="cLatestGuideArticle1">

                <div className="cGuideRowA">
                    <div className="iGuideAuthor"></div>
                    <div className="tGuideAuthor">ADMIN</div>
                    <div className="tGuideDate">13 APRIL 2023</div>
                </div> {/* cGuideRowA */}
                <div className="tGuideTitle">DIABLO IV OPEN BETA RETROSPECTIVE: TRANSFORMING FEEDBACK INTO CHANGE</div>
                <div className="tGuideTitleDescription">Blizzard talks about a variety of fixes and updates to various systems in
                    Diablo IV, all of which will be present in the version of the game that launches on June 6. </div>
                <div className="cGuideRowD">
                    <div className="iGuideGameLogo"></div>
                    <div className="tGuideGameName">DIABLO IV</div>
                    <div className="tGuideType">BUILD GUIDE</div>
                </div> {/* cGuideRowD */}

            </div>); {/* cLatestNewsArticle */ }

    }
}

export default GuideLatestArticle;
import React from "react";
//import { Link } from "react-router-dom";

import './GuideLeadArticle.css';

class GuideLeadArticle extends React.Component {
    render() {
        return (

            <div className="cMainGuideArticle">

                <div className="cMainGuideRowA">
                    <div className="iMainGuideAuthor"></div>
                    <div className="tMainGuideAuthor">ADMIN</div>
                    <div className="tMainGuideDate">13 APRIL 2023</div>
                </div> {/* cMainRowA */}
                <div className="tMainGuideTitle">DIABLO IV OPEN BETA RETROSPECTIVE: TRANSFORMING FEEDBACK INTO CHANGE</div>
                <div className="tMainGuideTitleDescription">After the Early Access and Open Beta weekends of March 17 and 24
                    concluded, the Diablo 4 development team read through all your feedback and reviewed gameplay data.
                    Using this information, they have made a variety of fixes and updates to various systems in Diablo IV,
                    all of which will be present in the version of the game that launches on June 6. </div>
                <div className="cMainGuideRowD">
                    <div className="iMainGuideGameLogo"></div>
                    <div className="tMainGuideGameName">DIABLO IV</div>
                    <div className="tMainGuideType">BUILD GUIDE</div>
                </div>{/* cMainGuideRowD */ }

            </div>); {/* cMainNewsArticle */ }

    }
}

export default GuideLeadArticle;
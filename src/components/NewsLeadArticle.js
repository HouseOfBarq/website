import React from "react";
//import { Link } from "react-router-dom";

import './NewsLeadArticle.css';

class NewsLeadArticle extends React.Component {
    render() {
        return (


            <div className="cMainNewsArticle">

                <div className="cMainNewsRowA">
                    <div className="iMainNewsAuthor"></div>
                    <div className="tMainNewsAuthor">ADMIN</div>
                    <div className="tMainNewsDate">13 APRIL 2023</div>
                </div> {/* cMainRowA */}
                <div className="tMainNewsTitle">DIABLO IV OPEN BETA RETROSPECTIVE: TRANSFORMING FEEDBACK INTO CHANGE</div>
                <div className="tMainNewsTitleDescription">After the Early Access and Open Beta weekends of March 17 and 24
                    concluded, the Diablo 4 development team read through all your feedback and reviewed gameplay data.
                    Using this information, they have made a variety of fixes and updates to various systems in Diablo IV,
                    all of which will be present in the version of the game that launches on June 6. </div>
                <div class="cMainNewsRowD">
                    <div className="iMainNewsGameLogo"></div>
                    <div className="tMainNewsGameName">DIABLO IV</div>
                    <div className="tMainNewsType">PRESS RELEASE</div>
                </div> {/* cMainRowD */}

            </div>); {/* cMainNewsArticle */ }

    }
}

export default NewsLeadArticle;
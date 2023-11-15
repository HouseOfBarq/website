import React from "react";

import TrackerCalendar from "../components/TrackerCalendar";
import NewsLeadArticle from "../components/NewsLeadArticle";
import TrackerPatch from "../components/TrackerPatch";
import NewsLatestArticle from "../components/NewsLatestArticle";
import GuideLeadArticle from "../components/GuideLeadArticle";
import GuideLatestArticle from "../components/GuideLatestArticle";

import SignUpBanner from "./../images/Advertising/SignUpBanner.webp"

class Home extends React.Component {
    render() {
        return (
        <main>
        <div className="cStripA">
            
            <TrackerCalendar />

            <NewsLeadArticle />

            <TrackerPatch />

        </div> {/* cStripA */ }

        <div className="cStripB">
            <h1>BREAKING NEWS</h1>
        </div> {/* cStripB */ }

        <div className="cStripC">

            <NewsLatestArticle />
            <NewsLatestArticle />
            <NewsLatestArticle />
            <NewsLatestArticle />

            <NewsLatestArticle />
            <NewsLatestArticle />
            <NewsLatestArticle />
            <NewsLatestArticle />

        </div> {/* cStripC */ }

        <div className="cStripD">
            <h1>LATEST GUIDES</h1>
        </div> {/* cStripD */ }

        <div class="cStripE">
            <div className="cStripELeft">
                <p>Ad/Promo placeholder</p>
            </div>

                <GuideLeadArticle />

            <div className="cStripERight">
                <p>Ad/Promo placeholder</p>
            </div> {/* cStripERight */}

        </div> {/* cStripE */ }

        <div className="cStripE2"> {/* LatestGuides */}

            <GuideLatestArticle />
            <GuideLatestArticle />
            <GuideLatestArticle />
            <GuideLatestArticle />

            <GuideLatestArticle />
            <GuideLatestArticle />
            <GuideLatestArticle />
            <GuideLatestArticle />

        </div> {/* cStripE2 */ }

        <div className="cStripF">
            <h1>GAME PAGES</h1>
        </div> {/* cStripF */ }

        <div className="cStripG">
            <div className="cGameListIcons">
                <button className="bGame1"> Genshin Impact </button>
                <button className="bGame2"> Lost Ark </button>
                <button className="bGame3"> Torchlight Infinite </button>
            </div> {/* cGameListIcons */}

        </div> {/* cStripG */ }

        <div className="cStripH">

            <img src={SignUpBanner}width="100%" height="auto" alt="SignUpBanner"></img>

        </div> {/* cStripH */}
        
        </main>
        )
    }
}

export default Home;
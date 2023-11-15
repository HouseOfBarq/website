import React from "react";

import SignUpBanner from "./../images/Advertising/SignUpBanner.webp"
import BreakingNewsStrip from "./../images/Bar/barBreakingNews.png"
import GameListStrip from "./../images/Bar/barGamePages.png"
import LatestGuidesStrip from "./../images/Bar/barLatestGuides.png"

class Home extends React.Component {
    render() {
        return (
        <main>
        <div className="cStripA">
            <div className="cCalendarTracker">
                <div className="cCalendarTrackerTitle">
                    <h2>CALENDAR TRACKER</h2>
                </div>
                <div className="cCalendarItem1">

                    <div className="iCalendarLogo"></div>
                    <div className="cCalendarMiddle">
                        <div className="tCalendarDate">25 Jan 2023</div>
                        <div className="tCalendarGame">HERO SIEGE</div>
                    </div>
                    <div className="tCalendarTitle">SEASON 18 BEGINS</div>
                </div> {/* cCalendarItem1 */}
                <div className="cCalendarItem2">

                    <div className="iCalendarLogo"></div>
                    <div className="cCalendarMiddle">
                        <div className="tCalendarDate">25 Jan 2023</div>
                        <div className="tCalendarGame">HERO SIEGE</div>
                    </div>
                    <div className="tCalendarTitle">SEASON 18 BEGINS</div>

                </div> {/* cCalendarItem2 */}
                <div className="cCalendarItem3">

                    <div className="iCalendarLogo"></div>
                    <div className="cCalendarMiddle">
                        <div className="tCalendarDate">25 Jan 2023</div>
                        <div className="tCalendarGame">HERO SIEGE</div>
                    </div>
                    <div className="tCalendarTitle">SEASON 18 BEGINS</div>

                </div> {/* cCalendarItem3 */}
                <div className="cCalendarItem4">

                    <div className="iCalendarLogo"></div>
                    <div className="cCalendarMiddle">
                        <div className="tCalendarDate">25 Jan 2023</div>
                        <div className="tCalendarGame">HERO SIEGE</div>
                    </div>
                    <div className="tCalendarTitle">SEASON 18 BEGINS</div>

                </div> {/* cCalendarItem4 */}
                <div className="cCalendarItem5">

                    <div className="iCalendarLogo"></div>
                    <div className="cCalendarMiddle">
                        <div className="tCalendarDate">25 Jan 2023</div>
                        <div className="tCalendarGame">HERO SIEGE</div>
                    </div>
                    <div className="tCalendarTitle">SEASON 18 BEGINS</div>

                </div> {/* cCalendarItem5 */}
            </div> {/* cCalendarTracker */}

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

            </div> {/* cMainArticle */}

            <div className="cPatchTracker">
                <div className="cPatchTrackerTitle">
                    <h2>PATCH TRACKER</h2>
                </div>
                <div className="cPatchItem1">

                    <div className="iPatchLogo"></div>
                    <div className="cPatchMiddle">
                        <div className="tPatchDate">25 Jan 2023</div>
                        <div className="tPatchGame">HERO SIEGE</div>
                    </div>
                    <div className="tPatchTitle">SEASON 18 BEGINS</div>

                </div> {/* cPatchItem1 */}
                <div className="cPatchItem2">

                    <div className="iPatchLogo"></div>
                    <div className="cPatchMiddle">
                        <div className="tPatchDate">25 Jan 2023</div>
                        <div className="tPatchGame">HERO SIEGE</div>
                    </div>
                    <div className="tPatchTitle">SEASON 18 BEGINS</div>

                </div> {/* cPatchItem2 */}
                <div className="cPatchItem3">

                    <div className="iPatchLogo"></div>
                    <div className="cPatchMiddle">
                        <div className="tPatchDate">25 Jan 2023</div>
                        <div className="tPatchGame">HERO SIEGE</div>
                    </div>
                    <div className="tPatchTitle">SEASON 18 BEGINS</div>

                </div> {/* cPatchItem3 */}
                <div className="cPatchItem4">

                    <div className="iPatchLogo"></div>
                    <div className="cPatchMiddle">
                        <div className="tPatchDate">25 Jan 2023</div>
                        <div className="tPatchGame">HERO SIEGE</div>
                    </div>
                    <div className="tPatchTitle">SEASON 18 BEGINS</div>

                </div> {/* cPatchItem4 */}
                <div className="cPatchItem5">

                    <div className="iPatchLogo"></div>
                    <div className="cPatchMiddle">
                        <div className="tPatchDate">25 Jan 2023</div>
                        <div className="tPatchGame">HERO SIEGE</div>
                    </div>
                    <div className="tPatchTitle">SEASON 18 BEGINS</div>

                </div> {/* cPatchItem5 */}
            </div> {/* cPatchTracker */}

        </div> {/* cStripA */ }

        <div className="cStripB">

            <img src={BreakingNewsStrip}width="100%" height="auto" alt="Breaking News"></img>

        </div> {/* cStripB */ }

        <div className="cStripC">

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

            </div> {/* cLatestNewsArticle1 */}
            <div className="cLatestNewsArticle2">LatestNewsArticle2</div>
            <div className="cLatestNewsArticle2">LatestNewsArticle3</div>
            <div className="cLatestNewsArticle2">LatestNewsArticle4</div>

            <div className="cLatestNewsArticle2">LatestNewsArticle5</div>
            <div className="cLatestNewsArticle2">LatestNewsArticle6</div>
            <div className="cLatestNewsArticle2">LatestNewsArticle7</div>
            <div className="cLatestNewsArticle2">LatestNewsArticle8</div>

        </div> {/* cStripC */ }

        <div className="cStripD">

            <img src={LatestGuidesStrip}width="100%" height="auto" alt="Latest Guides"></img>

        </div> {/* cStripD */ }

        <div class="cStripE">
            <div className="cStripELeft">
                <p>Ad/Promo placeholder</p>
            </div>

            <div className="cStripEMiddle">

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
                </div> {/* cMainGuideRowD */}

            </div> {/* cStripEMiddle */}

            <div className="cStripERight">
                <p>Ad/Promo placeholder</p>
            </div> {/* cStripERight */}

        </div> {/* cStripE */ }

        <div className="cStripE2"> {/* LatestGuides */}

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

            </div> {/* cLatestGuideArticle1 */}
            <div className="cLatestGuideArticle2">LatestGuideArticle2</div>
            <div className="cLatestGuideArticle2">LatestGuideArticle3</div>
            <div className="cLatestGuideArticle2">LatestGuideArticle4</div>

            <div className="cLatestGuideArticle2">LatestGuideArticle5</div>
            <div className="cLatestGuideArticle2">LatestGuideArticle6</div>
            <div className="cLatestGuideArticle2">LatestGuideArticle7</div>
            <div className="cLatestGuideArticle2">LatestGuideArticle8</div>

        </div> {/* cStripE2 */ }

        <div className="cStripF">

            <img src={GameListStrip}width="100%" height="auto" alt="Game List"></img>

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
import React from 'react';

import './About.css';

import YoutubeEmbed from '../components/YoutubeEmbed';
import SignUpBanner from '../components/SignUpBanner';

function About() {
    return (

        <main>

            <div className='cAboutTopBanner'></div>

            <div className='cAboutBody'>
                <div className='cAboutLeft'>

                </div> {/* cAboutLeft */}

                <div className='cAboutMiddle'>

                    <p className='tAboutIntro'>​House of Barq is the culmination of years of top level ARPG gaming, drawing down the knowledge and expertise gained in this unique
                        world of shared gaming experience. <br /><br />Living in the gaming world for days on end Barq recognised the need for a cohesive collective repository all things
                        gaming – a “one stop shop” and House of Barq was born.</p>

                    <div><YoutubeEmbed embedId="ruNd5zkvSTQ" /></div>

                    <h2>VISION</h2>
                    <p className='tAboutVision'>​Offering a streamlined experience for users, HOB provides a centralised community hub whereby all things gaming can be found at a single source.</p>

                    <h2>MISSION</h2>
                    <p className='tAboutMission'>​It is our drive to create a domain where news, information and opinion can merge in a meaningful way offering our users the opportunity to learn, participate and expand their gaming experience. We provide up to the minute factual gaming news, current calendars of leagues and patches, “how to”s that range from basic beginner strategy to highest level gameplay, entertaining and informative podcasts, Youtube content, as well as creative op ed pieces to inspire and stimulate.<br /><br />Bringing together YouTube, Twitter, Rumble, Discord, Spotify, Reddit, Facebook and Twitch, House of Barq has something for everyone who enjoys ARPG and MMO genres. We are not only a gaming news website, or a gaming guide site or a gameplay help site, we are all of these things and so much more. <br /><br />
                        House of Barq is a true gamers community, bringing together the best of the best in a single space to offer the most comprehensive gaming experience on the internet.</p>
                </div> {/* cAboutMiddle */}

                <div className='cAboutRight'>


                </div> {/* cAboutRight */}

            </div> {/* cAboutBody */}

            <div><SignUpBanner /></div>

        </main>
    )

}

export default About
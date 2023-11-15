import React from 'react'

import './Contact.css';

import SignUpBanner from '../components/SignUpBanner';

function Contact() {
    return (

        <main>

            <div className='cContactTopBanner'></div>

            <div className='cContactBody'>

                <div className='cContactLeft'>
                    <h1>Left</h1>
                </div> {/* cContactLeft */}

                <div className='cContactMiddle'>

                    <h1>Middle</h1>

                </div> {/* cContactMiddle */}

                <div className='cContactRight'>

                    <h1>Right</h1>

                </div> {/* cContactRight */}

            </div> {/* cContactBody */}

            <div><SignUpBanner /></div>

        </main>


    )
}

export default Contact
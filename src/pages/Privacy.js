import React from 'react'

import './Privacy.css';

import SignUpBanner from '../components/SignUpBanner';

function Privacy() {
    return (

        <main>

            <div className='cPrivacyTopBanner'></div>

            <div className='cPrivacyBody'>

                <div className='cPrivacyLeft'>
                    <h1>Left</h1>
                </div> {/* cPrivacyLeft */}

                <div className='cPrivacyMiddle'>

                    <h1>Middle</h1>

                </div> {/* cPrivacyMiddle */}

                <div className='cPrivacyRight'>

                    <h1>Right</h1>

                </div> {/* cPrivacyRight */}

            </div> {/* cPrivacyBody */}

            <div><SignUpBanner /></div>

        </main>


    )
}

export default Privacy
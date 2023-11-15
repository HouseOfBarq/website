import React from 'react'

import './TermsOfService.css';

import SignUpBanner from '../components/SignUpBanner';

function TermsOfService() {
    return (

        <main>

            <div className='cTermsOfServiceTopBanner'></div>

            <div className='cTermsOfServiceBody'>

                <div className='cTermsOfServiceLeft'>
                    <h1>Left</h1>
                </div> {/* cPrivacyLeft */}

                <div className='cTermsOfServiceMiddle'>

                    <h1>Middle</h1>

                </div> {/* cPrivacyMiddle */}

                <div className='cTermsOfServiceRight'>

                    <h1>Right</h1>

                </div> {/* cPrivacyRight */}

            </div> {/* cPrivacyBody */}

            <div><SignUpBanner /></div>

        </main>


    )
}

export default TermsOfService
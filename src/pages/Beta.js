import React from 'react';

import './Beta.css';

import SignUpBanner from '../components/SignUpBanner';

function Beta() {
    return (

        <main>

            <div className='cBetaTopBanner'></div>

            <div className='cBetaBody'>

                <div className='cBetaLeft'>
                    <h1>Left</h1>
                </div> {/* cBetaLeft */}

                <div className='cBetaMiddle'>

                    <h1>Middle</h1>

                </div> {/* cBetaMiddle */}

                <div className='cBetaRight'>

                    <h1>Right</h1>

                </div> {/* cBetaRight */}

            </div> {/* cBetaBody */}

        <div><SignUpBanner /></div>

        </main>

    )
}

export default Beta
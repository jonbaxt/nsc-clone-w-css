import React from 'react';
import '../Events/Events.css';

import p1 from '../../resources/Ship_submarine-2.jpg';
import p2 from '../../resources/student_4-2.jpg';
import p3 from '../../resources/student-3.jpg';
import p4 from '../../resources/training-4.jpg';

export default function News() {

    return (
        <div className='events' style={{ background: 'lightgrey'}}>
            <h1>NEWS</h1>

            <div className='eventcard'>
                <img src={p1} alt='' />
                <span className='eventcard-inside'>
                    <h1>Future submarine construction yard on track</h1>
                    <h2>NEWS</h2>
                    <p>The development application for the Future Submarine Shipyard has been submitted to Port Adelaide Enfield Council ahead of...</p>
                    <h2>READ MORE <div className='arrow'></div></h2>
                </span>
            </div>
            <div className='eventcard'>
                <img src={p2} alt='' />
                <span className='eventcard-inside'>
                    <h1>Hunter Defence Conference 2018 registrations now open</h1>
                    <h2>NEWS</h2>
                    <p>Booking is now available for the Hunter Defence Conference 2018, which provides an opportunity for Defence, primes, SMEs...</p>
                    <h2>READ MORE <div className='arrow'></div></h2>
                </span>
            </div>
            <div className='eventcard'>
                <img src={p3} alt='' />
                <span className='eventcard-inside'>
                    <h1>TAFE SA and the Australian Maritime College partner on shipbuilding skills</h1>
                    <h2>NEWS</h2>
                    <p>TAFE SA and AMC will work together long-term to build a pipeline of skilled workers for the major Nava Shipbuilding...</p>
                    <h2>READ MORE <div className='arrow'></div></h2>
                </span>
            </div>
            <div className='eventcard'>
                <img src={p4} alt='' />
                <span className='eventcard-inside'>
                    <h1>OPV win for Tasmanian industry</h1>
                    <h2>NEWS</h2>
                    <p>Defence Industry Minister Christopher yne said it's estimated the OPV project will employ up to 1,000 Australian workers...</p>
                    <h2>READ MORE <div className='arrow'></div></h2>
                </span>
            </div>
        </div>
    )
}
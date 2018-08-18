import React from 'react';
import './Career_Section.css';

import pic from '../../resources/training-4.jpg';

export default function Career_Section() {

    return (
        <div className='career'>
            <div className='career-left'>
                <img src={pic} alt='' />
            </div>
            <div className='career-right'>
                <h1>HOW THE NAVAL SHIPBUILDING COLLEGE IS BUILDING A WORKFORCE</h1>
                <div className='career-right-line'></div>
                <p>Help build Australia's future and join the Naval Shipbuilding Program. Talk to one of our Consultants to find out more.</p>

                <h2>READ MORE     +</h2>

                <button>JOIN THE WORKFORCE REGISTER <div className='arrow'></div></button>
            </div>
        </div>
    )
}
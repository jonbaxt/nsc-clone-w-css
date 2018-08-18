import React from 'react';
import './About_Section.css';
import '../../App.css';

import pic1 from '../../resources/HMAS-Canberra-3.jpg';

export default function About_Section() {

    return (
        <div className='AboutSec'>
            <div className='AboutSec-left'>
                <h1>WHAT IS THE NAVAL SHIPBUILDING COLLEGE?</h1>
                <div className='AboutSec-left-line'></div>
                <p>The Naval Shipbuilding College is a nationwide program, established under the Australian Government's $90 billion continuous naval shipbuilding program, to build Australia's future naval shipbuilding workforce.</p>
            
            
            <p>READ MORE +</p>

            <button>JOIN THE WORKFORCE REGISTER <div className='arrow'></div></button>
            </div>
            <div className='AboutSec-right'>
             <img src={pic1} alt='' />
            </div>

        </div>
    )
}
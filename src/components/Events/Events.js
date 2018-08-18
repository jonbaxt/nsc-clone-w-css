import React from 'react';
import './Events.css';

import conv from '../../resources/IMG_0058-e1532309372706.jpg';
import shipconst from '../../resources/ship_construction-2-1.jpg';
import paint from '../../resources/Spraypainter-2.jpg';
import aueng from '../../resources/AustralianEngineering.jpg';

export default function Events() {

    return (
        <div className='events'>
            <h1>EVENTS</h1>

            <div className='eventcard'>
                <img src={conv} alt='' />
                <span className='eventcard-inside'>
                    <h1>SkillsWest Careers Expo - Perth Convention & Exhibition Centre - 17 to 19 August 2018</h1>
                    <p>Skills West Expo is Western Australia's leading largest and most attended careers event that enables visitors to explore...</p>
                    <h2>READ ME <div className='arrow'></div></h2>
                </span>
            </div>
            <div className='eventcard'>
                <img src={shipconst} alt='' />            
                <span className='eventcard-inside'>
                    <h1>Australia's Future Submarine Industry Briefing</h1>
                    <p>1 August 2018, Canberra</p>
                    <h2>READ ME <div className='arrow'></div></h2>
                </span>
            </div>

            <div className='eventcard'>
                <img src={paint} alt='' />         
                <span className='eventcard-inside'>
                    <h1>Defence + Industry Conference and Gala Night 2018</h1>
                    <p>2 August 2018, National Convention Centre, Canberra</p>
                    <h2>READ ME <div className='arrow'></div></h2>
                </span>
            </div>

            <div className='eventcard'>
                <img src={aueng} alt='' />         
                <span className='eventcard-inside'>
                    <h1>Australian Engineering Conference</h1>
                    <p>17th - 19th September 2018 INTERNATIONAL CONVENTION CENTRE SYDNEY (ICC Sydney) 14 Darling Dr, Sydney NSW 2009 Australia</p>
                    <h2>READ ME <div className='arrow'></div></h2>
                </span>
            </div>
        </div>
    )
}
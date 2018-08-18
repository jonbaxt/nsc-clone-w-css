import React from 'react';
import './Education.css';

import student from '../../resources/student-1.jpg';
import student2 from '../../resources/student-3.jpg';

export default function Education() {

    return (
        <div className='education'>
            <h1>EDUCATION AND TRAINING FOR THE NAVAL SHIPBUILDING PROGRAM</h1>

            <p>Find out more about education and training pathways to join the Naval Shipbuilding Program.</p>

        <div className='splitpage'>
            <div className='splitpage-left'>
                <img src={student} alt=''/>

                <h1>LEARN ABOUT WHAT TRAINING IS AVAILABLE TO BE PART OF THE NAVAL</h1>
                <div className='splitpage-line'></div>
                <p>If you're looking to work for the Naval Shipbuilding Program, the Naval Shipbuilding College can get you where you want to go. Talk to a Career Consultant to find the right education or training pathway for you.</p>
                <h2>READ MORE +</h2>
                <button>JOIN THE WORKFORCE REGISTER <div className='arrow'></div></button>
            </div>
            <div className='splitpage-right'>
                <img src={student2} alt='' />

                <h1>WANT TO PROVIDE SHIPBUILDING INDUSTRY ENDORSED TRAINING?</h1>
                <div className='splitpage-line'></div>
                <p>Partner with the Naval Shipbuilding College to provide education and training to build Australia's future workforce. Contact us today to find out more.</p>
                <h2>READ MORE +</h2>
                <button>CONTACT US <div className='arrow'></div></button>
            </div>
        </div>

        </div>
    )
}
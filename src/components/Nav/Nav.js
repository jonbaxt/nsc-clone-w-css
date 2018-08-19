import React from 'react';
import './Nav.css';

import logo from '../../resources/nsc-logo.svg';

export default function Nav() {

    return (
        <div className='nav'>
            <img src={logo} alt='' />
            <div className='navLine' ></div>
            <a>ABOUT</a>
            <a>INDUSTRY</a>
            <a>CAREERS</a>
            <a>EDUCATION & TRAINING</a>
            <a>EVENTS</a>
            <a>NEWS</a>
            <a>CONTACT</a>
        </div>
    )
}
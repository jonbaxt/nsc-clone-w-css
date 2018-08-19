import React, { Component } from 'react';
import About_Section from './components/About_Section/About_Section';
import Industry_Section from './components/Industry_Section/Industry_Section';
import Career_Section from './components/Career_Section/Career_Section';
import Education from './components/Education/Education';
import Events from './components/Events/Events';
import News from './components/News/News';
import Nav from './components/Nav/Nav';

import './App.css';

import ship1 from './resources/fill-4.svg';
import ship2 from './resources/fill-10.svg';
import ship3 from './resources/fill-1.svg';
import logo from './resources/nsc-logo.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <p style={{color: 'black'}}>Website is built to show styling. Does not contain functionality.</p>
        <Nav />
      <section className='topArea'>
          <div className='topArea-inner'>
              <div className='topArea-ships'>
              <img src={ship3} alt='' />
              <img src={ship2} alt='' />
              <img src={ship1} alt='' />
              </div>
              <h1>BUILDING A NATIONAL WORKFORCE</h1>
              <button>JOIN THE WORFORCE REGISTER <div className='arrow' ></div></button>

              <div className='topArea-cards'>
              <div className='card'>INDUSTRY</div>
              <div className='card'>EDUCATION & TRAINING</div>
              <div className='card'>CAREERS</div>
              </div>
          </div>
      </section>

      <About_Section />
      <Industry_Section />
      <Career_Section />
      <Education />
      <Events />
      <News />
        <div className='line'></div>
      <footer>

        <img src={logo} alt= '' />
        <div>
        <a>ABOUT</a>
        <a>INDUSTRY</a>
        <a>CAREERS</a>
        <a>EDUCATION & TRAINING</a>
        </div>
        <div>
        <a>EVENTS</a>
        <a>NEWS</a>
        <a>CONTACT</a>
        </div>
        <div>
        <a>CONNECT WITH US</a>
        </div>
      </footer>
      <div className='littleLine'></div>
      <div className='bottom'>
        <p>© 2018 Naval Shipbuilding College</p>
        <a>SITE MAP</a>
      </div>
  </div>
    );
  }
}

export default App;

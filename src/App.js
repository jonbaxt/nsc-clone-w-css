import React, { Component } from 'react';
import About_Section from './components/About_Section/About_Section';
import Industry_Section from './components/Industry_Section/Industry_Section';
import './App.css';

import ship1 from './resources/fill-4.svg';
import ship2 from './resources/fill-10.svg';
import ship3 from './resources/fill-1.svg';

class App extends Component {
  render() {
    return (
      <div className='App'>
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
  </div>
    );
  }
}

export default App;

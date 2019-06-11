import React, { Component } from 'react';
import S28Icon from '../icons/S28-logo.png';
import RotatingBackground from './pages/RotatingBackground';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Services from './pages/Services';
import Journal from './pages/Journal';
import Connect from './pages/Connect';
import Bar from './Bar';

import Clients from '../images/Clients.jpg';
import Landing from '../images/Landing.jpg';
import Gallery from '../images/Gallery.jpg';
import Spectacle28 from '../images/Spectacle28.jpg';
import Welcome from '../images/Welcome.jpg';

class App extends Component {
  state = {
    backgrounds: [Landing, Welcome, Gallery, Clients, Spectacle28]
  };
  render() {
    return (
      <BrowserRouter>
        <div className="ui inverted vertical masthead center aligned segment">
          <div>
            {/* <Route path="/" exact component={Welcome} /> */}
            <Route path="/services" exact component={Services} />
            <Route path="/journal" exact component={Journal} />
            <Route path="/connect" exact component={Connect} />
            <Bar
              pos="top"
              area="right"
              first="Hello"
              second="Services"
              third="Journal"
              fourth="Connect"
            />
            <RotatingBackground animDuration={1} backgrounds={this.state.backgrounds} />
            <Bar
              pos="bottom"
              area="center"
              first="Welcome"
              second="Gallery"
              third="Clients"
              fourth="Who is spectacle28?"
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

/* <div className="ui center aligned container"></div> */

/* <img src={S28Icon} alt="My logo" className="ui tiny image" /> */

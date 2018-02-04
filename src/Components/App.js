import React, { Component } from 'react';
import LandingPage from './Branding/LandingPage';
import AboutMe from './Branding/AboutMe';
import SplitScreen from './Split-Screen/SplitScreen';
import Footer from './Branding/Footer';

export default class App extends Component {  
  render() {
    return (
      <div>
        <LandingPage />
        <SplitScreen />
        <Footer />
      </div>
    );
  }
}
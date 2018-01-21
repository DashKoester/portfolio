import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';
import dashPic from '../../Images/dash.png';

export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me-container'>
        <div className='about-me'>
          <div className='about-me-text'>
            <h1>Meet Dash</h1>
            <h2>Neuroscience Student // Aspiring Sofware Developer</h2>
            <Divider />
            <p>
              Hi! My name is Dashiell Koester, but I usually go by Dash. I am currently a Senior at the University of Illinois at Urbana-Champaign. In May, I will receive a Bachelor's of Science in Psychology with a concentration in Behavioral Neuroscience. Along with my B.S., I will also receive a Minor degree in both Computer Science and Philosophy.
            </p>
            <p>
              I entered college with the full intentions of applying to Graduate School for Neuroscience and becoming a Professor. I loved studying the human brain, and had the incredible opportunity to work for three prominent research labs throughout my undergraduate years.
            </p>
            <p>
              My sophomore year at UIUC I felt the desire to take a Computer Science course, just for the challenge of learning something new. I was always interested in technology, and the Intro to CS class fit perfectly in my schedule! Looking back now, choosing to take that class was one of the best decisions I have ever made. I was fascinated by programming; I had never been exposed to it before, and something about the ability to create something appear on a computer screen excited me.
            </p>
            <p>
              I believe my three areas of knowlede complement each other well. I have taken courses in Cognitive and Social Psychology which has helped with my understanding of topics in User Interface Design. My studies in Memory, Attention, and Neural Networks have supplemented my understanding of Articifial Intelligence perfectly. Additionally, my courses in Ethical and Metaphysical theories have been instrumental to developing my critical thinking skills.
            </p>
            <p>
              Feel free to browse my research and technical experience below, or send me an E-mail at <a href='mailto:dashkoester@gmail.com?subject=Portfolio%20Contact'>dashkoester@gmail.com</a>
            </p>
          </div>
          <div className='about-me-img'>
            <Image src={dashPic} />
          </div>
        </div>
      </div>
    );
  }
}
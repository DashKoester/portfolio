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
              Hi! My name is Dashiell Koester (but Dash is easier for most people to say). I am currently a Senior at the University of Illinois at Urbana-Champaign. In May, I will receive a Bachelor's of Science in Psychology with a concentration in Behavioral Neuroscience. Along with my B.S., I will also receive a Minor degree in both Computer Science and Philosophy.
            </p>
            <p>
              I actually entered college with the full intentions of applying to Graduate School for Neuroscience and becoming a Professor. I loved studying the human brain, and had the incredible opportunity to work for three prominent research labs throughout my undergraduate years.
            </p>
            <p>
              However; my Sophomore year I decided to take an Intro to Computer Science course. I became fascinated with programming; I had never been exposed to it before, and something about the ability to create something appear on a computer screen excited me. Due to my interest in Neuroscience, I find topics in Articifial Intelligence and Machine Learning particularly appealing. I also have a passion for front-end development and UI/UX design, much of which is self-taught.
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
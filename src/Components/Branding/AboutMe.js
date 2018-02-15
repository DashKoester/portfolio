import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';
import dashPic from '../../Images/dash.png';

export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me-container'>
        <div className='about-me'>
          <div className='about-me-text'>
            <h1>Dashiell Koester</h1>
            <h2>Neuroscience Student // Aspiring Software Developer</h2>
            <Divider />
            <p>
              Hi! My name is Dashiell Koester (but Dash is easier for most people to say). I am currently a Senior at the University of Illinois at Urbana-Champaign. In May, I will receive a Bachelor of Science in Psychology with a concentration in Behavioral Neuroscience. Along with my B.S., I will earn a Minor degree in Computer Science and a Minor degree in Philosophy.
            </p>
            <p>
              I entered college with the intention of applying to Graduate School for Neuroscience and becoming a research Professor. I love studying the human brain, and had the incredible opportunity to work with three prominent university research labs throughout my undergraduate years.
            </p>
            <p>
              During my Sophomore year I decided to explore something new and take a Computer Science course. I became fascinated with programming; I had never been exposed to it before, and the powerful ability to create something functional on a computer excited me. Due to my background in Neuroscience, I find the areas of Articifial Intelligence and Machine Learning particularly appealing. I also have a passion for front-end development and UI/UX design, with most of my studies in this area self-taught.
            </p>
            <p>
              I believe my three areas of focus (Neuroscience, Computer Science, and Philosophy) complement each other perfectly for a Computer Science related career. Studying Cognitive and Social Psychology has bolstered my understanding of topics in User Interface Design. My studies in Memory, Attention, and Neural Networks have supplemented my understanding of Articifial Intelligence. Additionally, I have developed my critical thinking skills through my study of Ethical and Metaphysical theories.
            </p>
            <p>
              Please browse the details of my research and technical experience below, or send me an email at <a href='mailto:dashkoester@gmail.com?subject=Portfolio%20Contact'>dashkoester@gmail.com</a>
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
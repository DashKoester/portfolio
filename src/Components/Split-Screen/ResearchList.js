import React, { Component } from 'react';
import ResearchLab from './ResearchLab';
import { Parallax } from 'react-parallax';
import { Icon } from 'semantic-ui-react';
import researchExperience from '../../researchExperience.json';

export default class ResearchList extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      labs: []
    };
  };

  // Set initial state based on initial props (languages)
  componentDidMount() {
    this.setState({
      labs: researchExperience.labs
    });
  }
  
  render() {
    // map each skill in the state array to a unique skill component
    const labComponents = this.state.labs.map((lab) => (
      <ResearchLab
        key={'skill-' + lab.id}
        id={lab.id}
        title={lab.title}
        description={lab.description}
        url={lab.url}
      />

    ));

    return (
      <div className='research-list'>
        <Icon bordered circular size='large' link name='arrow left' onClick={this.props.onExit} />
        {labComponents[0]}
        <Parallax
            bgImage={require('../../Images/parallax1.jpeg')}
            bgImageAlt="the cat"
            strength={300}
            blur={{min:0, max:2}}
          >
            <div style={{ height: '600px' }} />
          </Parallax>
          {labComponents[1]}
          <Parallax
            bgImage={require('../../Images/beckman.jpg')}
            bgImageAlt="the cat"
            strength={300}
            blur={{min:0, max:2}}
          >
            <div style={{ height: '600px' }} />
          </Parallax>
          {labComponents[2]}          
      </div>
    );
  }
}
import React, { Component } from 'react';
import ResumeMenu from './ResumeMenu';
import SkillsList from './SkillsList';
import techExperience from '../techExperience.json';
import { Container } from 'semantic-ui-react';

export default class Resume extends Component {

  constructor(props){
    super(props);

    this.state = {
      skills: [],
    };
  }

  handleItemClick = (e, {name}) => {
    name = name.toLowerCase();
    this.setState({
      activeItem: name,
      skills: techExperience[name]
    })
  };

  componentWillMount() {
    this.setState({
      activeItem: 'languages',
      skills: techExperience.languages
    })
  }

  render() {
    return (
      <Container className='resume-container'>
        <ResumeMenu attached activeItem={this.state.activeItem} onItemChange={this.handleItemClick} onExit={this.props.onExit}/>
        <SkillsList data={this.state.skills} />
      </Container>
    );
  }
}
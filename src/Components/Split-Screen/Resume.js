import React, { Component } from 'react';
import ResumeMenu from './ResumeMenu';
import SkillsList from './SkillsList';
import LanguageGrid from './LanguageGrid';
import { Container } from 'semantic-ui-react';

export default class Resume extends Component {

  constructor(props){
    super(props);

    this.state = {
      skills: [],
      activeItem: ''
    };
  }

  
  handleItemClick = (e, {name}) => {
    this.setState({
      activeItem: name,
      skills: this.props.data[name]
    })
  };
  
  // must be will mount
  componentWillMount = () => {
    this.setState({
      activeItem: this.props.activeItem,
      skills: this.props.data[this.props.activeItem]
    })
  }
  
  render() {
    return (
      <Container className='resume-container'>
        <ResumeMenu title={this.props.title} menuTitles={this.props.menuTitles} attached activeItem={this.state.activeItem} onItemChange={this.handleItemClick} onExit={this.props.onExit}/>
        {this.state.activeItem === 'Languages and Frameworks' ?
          <LanguageGrid title={this.props.title} skills={this.state.skills} /> :
          <SkillsList title={this.props.title} skills={this.state.skills} />
        }
      </Container>
    );
  }
}
import React, { Component } from 'react';
import ResumeMenu from './ResumeMenu';
import SkillsList from './SkillsList';
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
    const active = this.props.activeItem;
    this.setState({
      activeItem: active,
      skills: this.props.data[active]
    })
  }
  
  render() {
    console.log(this.state.activeItem);
    return (
      <Container className='resume-container'>
        <ResumeMenu menuTitles={this.props.menuTitles} attached activeItem={this.state.activeItem} onItemChange={this.handleItemClick} onExit={this.props.onExit}/>
        <SkillsList dataType={this.props.dataType} skills={this.state.skills} />
      </Container>
    );
  }
}
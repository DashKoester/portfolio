
import React, { Component } from 'react';
import Experience from './Experience';
import SelectExperience from './SelectExperience';

export default class AdditionalExperience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showContent: null
    }
  }

  componentDidMount = () => {
    this.setState({
      showContent: false
    })
  }

  onWorkClick(){
    const flag = this.state.showContent;
    this.setState({
      showContent: !flag
    });
  }

  render() {
    return (
      <div className='additional-experience'>
        <div className='additional-experience-title'>
          <h1 className='additional-experience-heading' >Additional Experience</h1>
        </div>
        <div className='select-experience'>
        <SelectExperience title='Work Experience' />
        <SelectExperience title='Leadership Experience' />
        <Experience title='GUCCI GANG' />
        </div>
      </div>
    );
  }
}
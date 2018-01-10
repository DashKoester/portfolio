import React, { Component } from 'react';
import SplitScreen from './SplitScreen';
import Coursework from './Coursework';
import Resume from './Resume';
import ResearchList from './ResearchList';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSplitScreen: null,
      showCoursework: null,
      showResume: null,
      showResearch: null
    };

    this.showCoursework = this.showCoursework.bind(this);
    this.showResume = this.showResume.bind(this);
    this.showResearch = this.showResearch.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      showSplitScreen: true,
      showCoursework: false,
      showResume: false,
      showResearch: false
    })
  }

  showCoursework(){
    let splitScreenFlag = this.state.showSplitScreen;
    let courseworkFlag = this.state.showCoursework;
    this.setState({
      showSplitScreen: !splitScreenFlag,
      showCoursework: !courseworkFlag,
    });
  }  

  showResume(){
    let splitScreenFlag = this.state.showSplitScreen;
    let resumeFlag = this.state.showResume;
    this.setState({
      showSplitScreen: !splitScreenFlag,
      showResume: !resumeFlag,
    });
  }

  showResearch(){
    let splitScreenFlag = this.state.showSplitScreen;
    let researchFlag = this.state.showResearch;
    this.setState({
      showSplitScreen: !splitScreenFlag,
      showResearch: !researchFlag
    });
  }
  
  render() {
    return (
      <div>
        {this.state.showSplitScreen ? <SplitScreen handleLeftClick={this.showCoursework} handleMidClick={this.showResume} handleRightClick={this.showResearch} /> : null}
        {this.state.showCoursework ? <Coursework onExit={this.showCoursework}/> : null}
        {this.state.showResume ? <Resume onExit={this.showResume}/> : null}
        {this.state.showResearch ? <ResearchList onExit={this.showResearch}/> : null}
      </div>
    );
  }
}

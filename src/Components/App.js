import React, { Component } from 'react';
import SplitScreen from './SplitScreen';
import Resume from './Resume';
import ResearchList from './ResearchList';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSplitScreen: null,
      showResume: null,
      showResearch: null
    };

    this.showResume = this.showResume.bind(this);
    this.showResearch = this.showResearch.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      showSplitScreen: true,
      showResume: false,
      showResearch: false
    })
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
        {this.state.showSplitScreen ? <SplitScreen handleLeftClick={this.showResume} handleRightClick={this.showResearch} /> : null}
        {this.state.showResume ? <Resume onExit={this.showResume}/> : null}
        {this.state.showResearch ? <ResearchList onExit={this.showResearch}/> : null}
      </div>
    );
  }
}

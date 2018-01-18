import React, { Component } from 'react';
import SplitScreen from './Split-Screen/SplitScreen';
import Resume from './Split-Screen/Resume';
import techExperience from '../techExperience.json';
import coursework from '../coursework.json';
import researchExperience from '../researchExperience.json';
import Card from './Branding/Card';
import LandingPage from './Branding/LandingPage';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSplitScreen: null,
      showCoursework: null,
      showResume: null,
      showResearch: null,
      data: [],
      dataType: '',
      activeItem: '',
      menuTitles: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      showSplitScreen: true,
      showCoursework: false,
      showResume: false,
      showResearch: false
    })
  }

  showCoursework = () => {
    this.setState({
      showSplitScreen: !this.state.showSplitScreen,
      showCoursework: !this.state.showCoursework,
      data: coursework,
      activeItem: 'Neuroscience',
      menuTitles: ["Neuroscience", "Computer Science", "Philosophy"],
      dataType: 'Courses'
    });
  }  

  showResume = () => {
    this.setState({
      showSplitScreen: !this.state.showSplitScreen,
      showResume: !this.state.showResume,
      data: techExperience,
      activeItem: 'Languages',
      menuTitles: ["Languages", "Frameworks", "Projects"],
      dataType: 'Skills'
    });
  }

  showResearch = () => {
    this.setState({
      showSplitScreen: !this.state.showSplitScreen,
      showResearch: !this.state.showResearch,
      data: researchExperience,
      activeItem: 'Decision Neuroscience Lab',
      menuTitles: ["Spatial Cognition", "CPCS", "Desicion Neuroscience"],
      dataType: 'Research'

    });
  }
  
  render() {
    return (
      <div>
        <LandingPage />
        <div>
          
        </div>
         <div>
          {this.state.showSplitScreen ?
            <SplitScreen
              handleLeftClick={this.showCoursework}
              handleMidClick={this.showResume}
              handleRightClick={this.showResearch} />
            : null
          }
          {this.state.showCoursework ? 
            <Resume
            menuTitles={this.state.menuTitles}  
              activeItem={this.state.activeItem}
              data={this.state.data}
              dataType={this.state.dataType}
              onExit={this.showCoursework} />
            : null
          }
          {this.state.showResume ? 
            <Resume
              menuTitles={this.state.menuTitles}  
              activeItem={this.state.activeItem}
              data={this.state.data}
              dataType={this.state.dataType}
              onExit={this.showResume} />
            : null
          }
          {this.state.showResearch ? 
            <Resume
              menuTitles={this.state.menuTitles}  
              activeItem={this.state.activeItem}
              data={this.state.data}
              dataType={this.state.dataType}
              onExit={this.showResearch} />
            : null
          }
        </div>
      </div>
    );
  }
}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Split from './Split';
import Resume from './Resume';
import techExperience from '../../Data/techExperience.json';
import coursework from '../../Data/coursework.json';
import researchExperience from '../../Data/researchExperience.json';

export default class SplitScreen extends Component {
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
    });
  }
  showCoursework = () => {
    // Scroll to top of component
    const componentYCoordinate = ReactDOM.findDOMNode(this).offsetTop - 0.5;
    window.scroll(0, componentYCoordinate);

    // Render component
    this.setState({
      showSplitScreen: !this.state.showSplitScreen,
      showCoursework: !this.state.showCoursework,
      data: coursework,
      activeItem: 'Neuroscience',
      menuTitles: ["Neuroscience", "Computer Science", "Philosophy"],
      title: 'Coursework'
    });
  }  

  showResume = () => {
    // Scroll to top of component
    const componentYCoordinate = ReactDOM.findDOMNode(this).offsetTop - 0.5;
    window.scroll(0, componentYCoordinate);

    // Render component
    this.setState({
      showSplitScreen: !this.state.showSplitScreen,
      showResume: !this.state.showResume,
      data: techExperience,
      activeItem: 'Languages and Frameworks',
      menuTitles: ["Languages and Frameworks", "Projects"],
      title: 'Technical Experience'
    });
  }

  showResearch = () => {
    // Scroll to top of component
    const componentYCoordinate = ReactDOM.findDOMNode(this).offsetTop - 0.5;
    window.scroll(0, componentYCoordinate);

    // Render component
    this.setState({
      showSplitScreen: !this.state.showSplitScreen,
      showResearch: !this.state.showResearch,
      data: researchExperience,
      activeItem: 'Labs',
      menuTitles: ["Spatial Cognition", "CPCS", "Desicion Neuroscience"],
      title: 'Research Experience'

    });
  }
  
  render() {
    return (
      <div>
          {this.state.showSplitScreen ?
            <Split
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
              title={this.state.title}
              onExit={this.showCoursework} />
            : null
          }
          {this.state.showResume ? 
            <Resume
              menuTitles={this.state.menuTitles}  
              activeItem={this.state.activeItem}
              data={this.state.data}
              title={this.state.title}
              onExit={this.showResume} />
            : null
          }
          {this.state.showResearch ? 
            <Resume
              menuTitles={this.state.menuTitles}  
              activeItem={this.state.activeItem}
              data={this.state.data}
              title={this.state.title}
              onExit={this.showResearch} />
            : null
          }
      </div>
    );
  }
}
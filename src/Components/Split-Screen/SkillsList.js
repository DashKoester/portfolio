import React, { Component } from 'react';
import Skill from './Skill';
import Course from './Course';
import Lab from './Lab';
import { ItemGroup, Divider } from 'semantic-ui-react';


export default class SkillsList extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      skills: this.props.skills
    };
  };

  // Set initial state based on initial props (languages)
  componentDidMount() {
    this.setState({
      skills: this.props.skills
    });
  }

  // Update state when the user clicks on item in ResumeMenu and new props are passed down
  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        skills: nextProps.skills
      });
    }
  } 
  
  render() {
    switch(this.props.title) {
      case 'Coursework':
        // must use var to avoid block scoping
        var components = this.state.skills.map((course) => (
          <Course
            key={'course-' + course.id}
            id={course.id}
            courseNumber={course.courseNumber}
            title={course.title}
            description={course.description}
            topics={course.topics}
          />
        ));
        break;
      
      case 'Technical Experience':
        components = this.state.skills.map((skill) => (
          <Skill
            key={'skill-' + skill.id}
            id={skill.id}
            title={skill.title}
            description={skill.description}
            url={skill.url}
          />
        ));
        break;

      case 'Research Experience':
      components = this.state.skills.map((lab) => (
        <Lab
          key={'lab-' + lab.id}
          id={lab.id}
          title={lab.title}
          director={lab.director}
          description={lab.description}
          timeframe={lab.timeframe}
          url={lab.url}
        />
      ));
      break;

    default:
      console.log("Couldn't map the skills correctly!")
    }

    return (
      <div>
        <Divider />
        <ItemGroup divided>
          {components}
        </ItemGroup>
      </div>
    );
  }
}
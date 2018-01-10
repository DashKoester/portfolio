import React, { Component } from 'react';
import Skill from './Skill';
import { ItemGroup } from 'semantic-ui-react';


class SkillsList extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      skills: this.props.data,
    };
  };

  // Set initial state based on initial props (languages)
  componentDidMount() {
    this.setState({
      skills: this.props.data
    });
  }

  // Update state when the user clicks on item in ResumeMenu and new props are passed down
  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        skills: nextProps.data
      });
    }
  } 
  
  render() {
    // map each skill in the state array to a unique skill component
    const skillComponents = this.state.skills.map((skill) => (
      <Skill
        key={'skill-' + skill.id}
        id={skill.id}
        title={skill.title}
        description={skill.description}
        url={skill.url}
      />
    ));

    return (
      <ItemGroup divided>
        {skillComponents}
      </ItemGroup>
    );
  }
}

export default SkillsList;
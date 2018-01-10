import React, { Component } from 'react';
import ResearchLab from './ResearchLab';
import { Container, Divider, Icon, Segment } from 'semantic-ui-react';
import researchExperience from '../researchExperience.json';

export default class ResearchList extends Component {

  constructor(props) {
    super(props);

    this.state =  {
      labs: []
    };
  };

  // Set initial state based on initial props (languages)
  componentDidMount() {
    this.setState({
      labs: researchExperience.labs
    });
  }
  
  render() {
    // map each skill in the state array to a unique skill component
    const labComponents = this.state.labs.map((lab) => (
      <ResearchLab
        key={'skill-' + lab.id}
        id={lab.id}
        title={lab.title}
        description={lab.description}
        url={lab.url}
      />
    ));

    return (
      <Container text className='research-list'>
          <Icon link name='left arrow circle' color='black' size='big' onClick={this.props.onExit}/>
        <Segment raised>
            {labComponents}
        </Segment>
      </Container>
    );
  }
}
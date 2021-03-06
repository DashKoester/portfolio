import React, { Component } from 'react';
import Language from './Language';
import { Divider, Grid } from 'semantic-ui-react';


export default class LanguageGrid extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      skills: []
    };
  };

  // Set initial state based on initial props (languages)
  componentWillMount() {
    this.setState({
      skills: this.props.skills,
    });
  }

  // Update state when the user clicks on item in ResumeMenu and new props are passed down
  componentWillReceiveProps(nextProps){
    if(this.props !== nextProps){
      this.setState({
        skills: nextProps.skills,
      });
    }
  } 
  
  render() {
    const firstRow = this.state.skills.slice(0, 3);
    const secondRow = this.state.skills.slice(3, 6);
    const thirdRow = this.state.skills.slice(6, 9);
    const finalRow = this.state.skills.slice(9);

    const firstRowComponents = firstRow.map((language) => (
      <Language
        key={'language-' + language.id}
        id={language.id}
        title={language.title}
        description={language.description}
      />
    ));

    const secondRowComponents = secondRow.map((language) => (
      <Language
        key={'language-' + language.id}
        id={language.id}
        title={language.title}
        description={language.description}
      />
    ));

    const thirdRowComponents = thirdRow.map((language) => (
      <Language
        key={'language-' + language.id}
        id={language.id}
        title={language.title}
        description={language.description}
      />
    ));

    const finalRowComponents = finalRow.map((language) => (
      <Language
        key={'language-' + language.id}
        id={language.id}
        title={language.title}
        description={language.description}
      />
    ));

    return (
      <div>
        <Divider />
        <Grid columns={3} celled='internally' textAlign='center'>
          <Grid.Row>
            {firstRowComponents}
          </Grid.Row>
          <Grid.Row>
            {secondRowComponents}
          </Grid.Row>
          <Grid.Row>
            {thirdRowComponents}
          </Grid.Row>
          <Grid.Row>
            {finalRowComponents}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
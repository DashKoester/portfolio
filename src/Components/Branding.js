import React, { Component } from 'react';
import { Header, Image, Icon } from 'semantic-ui-react';



export default class Branding extends Component {
  render() {
    return (
      <div className='logo'>
        <Header inverted as='h1' size='large' textAlign='center'>
        Dashiell Koester
          <Header.Subheader >
            NEUROSCIENCE <Icon name='circle thin'/>COMPUTER SCIENCE <Icon name='circle thin'/>PHILOSOPHY
          </Header.Subheader>
        </Header>
      </div>
    );
  }
}
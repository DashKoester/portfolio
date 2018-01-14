import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';


export default class Branding extends Component {
  render() {
    return (
      <div className='branding'>
        <a href='/public/Food Handlers.pdf' download='test-download'>
        <Header inverted as='h1' size='large' textAlign='center'>
        Dashiell Koester
          <Header.Subheader >
            NEUROSCIENCE <Icon name='circle thin'/>COMPUTER SCIENCE <Icon name='circle thin'/>PHILOSOPHY
          </Header.Subheader>
        </Header>
        </a>
      </div>
    );
  }
}
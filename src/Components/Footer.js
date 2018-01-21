import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

const containerStyle = {
  background: 'black',
  width: '100%',
  textAlign: 'center',
  padding: '30px 0',
  opacity: '.7'
};

const linkStyle= {
  color: 'white'
}


export default class Footer extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <Header content="- Check out some of the projects I've been working on! -"  inverted />
        <Header.Subheader>
          <a style={linkStyle} href='https://www.github.com/DashKoester'>
            <Icon inverted name='github' size='huge' link />
          </a>
          <a style={linkStyle} href='https://www.gitlab.com/DashKoester'>
            <Icon name='gitlab' size='huge' link />
          </a>
        </Header.Subheader>
      </div>
    );
  }
} // Footer.js
import React, { Component } from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import reactImage from '../../Images/react.png';
import semanticImage from '../../Images/semanticUILogo.png';

const containerStyle = {
  background: 'lightslategray',
  width: '100%',
  padding: '10px 20px',
  opacity: '.7',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '20px'
};

const linkStyle= {
  color: 'white'
};

const beginningCode = '<';
const endCode = '/>';

export default class Footer extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div>
          <Header inverted>
            {beginningCode} Made with <Image src={reactImage} size='tiny' /> and  <Image src={semanticImage} style={{margin: '0 6px'}} size='mini' /> {endCode}
          </Header>
        </div>
        <div>
          <a style={linkStyle} href='https://www.github.com/DashKoester'>
            <Icon inverted name='github' size='big' link />
          </a>
          <a style={linkStyle} href='https://www.gitlab.com/DashKoester'>
            <Icon name='gitlab' size='big' link />
          </a>
        </div>
      </div>
    );
  }
} // Footer.js
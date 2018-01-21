import React, { Component } from 'react';
import { Icon, Header } from 'semantic-ui-react';


export default class ResearchLab extends Component {

  render() {
    return (
      <div className='research-content'>
        <div className='research-content-text'>
          <Header dividing textAlign='center' as='h2' size='huge'>{this.props.title}</Header>
          <p>
            {this.props.description}
          </p>
          <a className='research-lab-url' target='_blank' href={this.props.url}>
            <Icon color='black' link name='external' size='large'/>
            {this.props.url}
          </a>
        </div>
      </div>
    );
  }
} // ResearchLab.js
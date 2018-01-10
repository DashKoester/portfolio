import React, { Component } from 'react';
import { Item, Icon, Header, Divider } from 'semantic-ui-react';

// showcases a technical skill in skillList
export default class ResearchLab extends Component {

  render() {
    return (
      <div className='research-content'>
        <Header textAlign='center' as='h2'>{this.props.title}</Header>
        <p>
          {this.props.description}
        </p>
          <a href={this.props.url} target='_blank'>
            <Icon name='external' size='large' color='black'/>
            {this.props.url}
         </a>
         <Divider />
      </div>
    );
  }
} // ResearchLab.js
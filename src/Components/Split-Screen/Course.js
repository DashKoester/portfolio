import React, { Component } from 'react';
import { Header, Item } from 'semantic-ui-react';

// showcases a technical skill in skillList
export default class Course extends Component {

  render() {
    return (
      <Item className='courseItem'>
        <Header content={this.props.courseNumber} size='huge' className='courseNumber' />
        <Item.Content verticalAlign='middle'>
          <Header size='large'>{this.props.title}</Header>
          <Item.Description>
            {this.props.description}
          </Item.Description>
          <Item.Extra>
            {this.props.topics}
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
} // Course.js
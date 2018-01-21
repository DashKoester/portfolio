import React, { Component } from 'react';
import { Header, Item, Icon } from 'semantic-ui-react';

// showcases a technical skill in skillList
export default class Lab extends Component {

  render() {
    return (
      <Item className='labItem'>
        <Item.Content verticalAlign='middle'>
          <Header size='large'>{this.props.title}</Header>
          <Header.Subheader>
            ({this.props.director})
          </Header.Subheader>
          <Item.Meta>
            {this.props.timeframe}
          </Item.Meta>
          <Item.Description>
            {this.props.description}
          </Item.Description>
          <Item.Extra>
          <a href={this.props.url} target='_blank'>
              <Icon name='external link' size='large' color='black'/>
              {this.props.url}
            </a>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
} // Lab.js
import React, { Component } from 'react';
import { Menu, Header, Icon } from 'semantic-ui-react';

export default class ResumeMenu extends Component {

  render() {
    // get current active menu item
    const { activeItem } = this.props;

    return (
      <div>
        <br />
          <Header as='h2' textAlign='center'>
            <Header.Content>
              <Icon size='large' link name='left arrow circle' onClick={this.props.onExit} />
            </Header.Content>
            <Header.Content>
              Technical Experience
            </Header.Content>
          </Header>
        <Menu fluid widths={3} pointing size='massive'>
          <Menu.Item
            name='Languages'
            active={activeItem === 'languages'}
            onClick={this.props.onItemChange}>
            {this.name}
          </Menu.Item>

          <Menu.Item
            name='Frameworks'
            active={activeItem === 'frameworks'}
            onClick={this.props.onItemChange}>
            {this.name}
          </Menu.Item>

          <Menu.Item
            name='Projects'
            active={activeItem === 'projects'}
            onClick={this.props.onItemChange}>
            {this.name}
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
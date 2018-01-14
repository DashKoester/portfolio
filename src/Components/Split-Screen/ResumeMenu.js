import React, { Component } from 'react';
import { Menu, Header, Icon } from 'semantic-ui-react';

export default class ResumeMenu extends Component {

  render() {

    /*
    @TODO:
      figure out why active item doesn't get applied {this.props.activeItem}

    */
    const active = this.props.activeItem;
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
            name={this.props.menuTitles[0]}
            active={this.name === active}
            onClick={this.props.onItemChange}>
          </Menu.Item>
          <Menu.Item
            name={this.props.menuTitles[1]}
            active={this.name === active}
            onClick={this.props.onItemChange}>
          </Menu.Item>
          <Menu.Item
            name={this.props.menuTitles[2]}
            active={this.name === active}
            onClick={this.props.onItemChange}>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
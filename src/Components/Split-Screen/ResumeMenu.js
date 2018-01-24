import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class ResumeMenu extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeItem: this.props.activeItem
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps !== this.props) {
      this.setState({
        activeItem: nextProps.activeItem
      })
    }
  }

  render() {
    return (
      <div>
        <div className='resume-menu-title'>
          <div className='resume-menu-title-icon'>
            <Icon link size='huge' name='arrow circle outline left' onClick={this.props.onExit}/>
          </div>
          <h1>{this.props.title}</h1>
        </div>
        {this.props.title === 'Coursework' ? 
          <Menu color='blue' style={{marginBottom: '0'}} fluid widths={3} pointing size='massive'>
            <Menu.Item
              name={this.props.menuTitles[0]}
              active={this.props.menuTitles[0] === this.state.activeItem}
              onClick={this.props.onItemChange}>
            </Menu.Item>
            <Menu.Item
              name={this.props.menuTitles[1]}
              active={this.props.menuTitles[1] === this.state.activeItem}
              onClick={this.props.onItemChange}>
            </Menu.Item>
            <Menu.Item
              name={this.props.menuTitles[2]}
              active={this.props.menuTitles[2] === this.state.activeItem}
              onClick={this.props.onItemChange}>
            </Menu.Item>
          </Menu>
          : null}
          {this.props.title === 'Technical Experience' ? 
          <Menu color='blue' style={{marginBottom: '0'}} fluid widths={2} pointing size='massive'>
            <Menu.Item
              name={this.props.menuTitles[0]}
              active={this.props.menuTitles[0] === this.state.activeItem}
              onClick={this.props.onItemChange}>
            </Menu.Item>
            <Menu.Item
              name={this.props.menuTitles[1]}
              active={this.props.menuTitles[1] === this.state.activeItem}
              onClick={this.props.onItemChange}>
            </Menu.Item>
          </Menu>
          : null}
      </div>
    );
  }
}
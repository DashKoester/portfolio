import React, { Component } from 'react';
import { Header, Item, Icon } from 'semantic-ui-react';

// import static images until I figure out webpack
import cppImg from '../../Images/cpp.png';
import spottImg from '../../Images/spott.png'
import faithImg from '../../Images/faith.png'
import cs225Img from '../../Images/cs225.png'

// showcases a technical skill in skillList
export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.determineImage = this.determineImage.bind(this);
  }

  render() {
    return (
      <Item>
        <Item.Image size='small' src={this.determineImage(this.props.title)} alt='SkillImg' />
        <Item.Content verticalAlign='top'>
          <Header size='large'>{this.props.title}</Header>
          <Item.Description>
            {this.props.description}
          </Item.Description>
          <Item.Extra>
            <a href={this.props.url} target='_blank'>
              <Icon name='github' size='large' color='black'/>
              {this.props.url}
            </a>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }

  // hacky way to determnine which image should be rendered
  determineImage(title) {
    switch(title){

      case "Spott":
        let image = spottImg;
        return image;

      case "Faith Lutheran Church Website":
        image = faithImg;
        return image;

      case "Data Structures":
        image = cs225Img;
        return image;

      default:
        image = cppImg;
        return image;
    }
  }
} // Skill.js
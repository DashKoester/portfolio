import React, { Component } from 'react';
import { Header, Item, Icon } from 'semantic-ui-react';

// import static images until I figure out webpack
import cs225Img from '../../Images/cs225.png';
import spottImg from '../../Images/spott.png'
import faithImg from '../../Images/faith.png'
import portfolioImg from '../../Images/portfolio.png';
import mehuImg from '../../Images/mehu.png'

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

      case "Mehu":
        return mehuImg;

      case "Portfolio Website":
        return portfolioImg;

      case "Spott":
        return spottImg;

      case "Faith Lutheran Church Website":
        return faithImg;

      case "Data Structures":
        return cs225Img;

      default:
        return portfolioImg
    }
  }
} // Skill.js
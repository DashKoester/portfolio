import React, { Component } from 'react';
import { Item, Icon } from 'semantic-ui-react';

// import static images until I figure out webpack
import cppImg from '../Images/cpp.png';
import htmlImg from '../Images/html.png';
import androidImg from '../Images/android.png';
import jsImg from '../Images/js.png';
import reactImg from '../Images/react.png'
import pugImg from '../Images/pug.png'
import scssImg from '../Images/scss.png'
import spottImg from '../Images/spott.png'
import faithImg from '../Images/faith.png'
import cs225Img from '../Images/cs225.png'

// showcases a technical skill in skillList
export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.determineImage = this.determineImage.bind(this);
  }

  render() {
    return (
      <Item>
        <Item.Image size='small' src={this.determineImage(this.props.title)} alt='Something' />
        <Item.Content>
          <Item.Header as='h2'>{this.props.title}</Item.Header>
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


  determineImage(title) {
    switch(title){
      
      case "C++":
        let image = cppImg;
        return image;
        
      case "HTML & CSS":
        image = htmlImg;
        return image;

      case "Android & Java":
        image = androidImg;
        return image;

      case "JavaScript":
        image = jsImg;
        return image;

        case "ReactJS":
        image = reactImg;
        return image;

      case "Pug/Jade":
        image = pugImg;
        return image;

      case "SCSS":
        image = scssImg;
        return image;

        case "Spott":
        image = spottImg;
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
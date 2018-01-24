import React, { Component } from 'react';
import { Header, Item, Icon } from 'semantic-ui-react';
// import images until I figure out webpack
import cppImg from '../../Images/cpp.png';
import htmlImg from '../../Images/html.png';
import androidImg from '../../Images/android.png';
import jsImg from '../../Images/js.png';
import reactImg from '../../Images/react.png'
import pugImg from '../../Images/pug.png'
import rImg from '../../Images/r.svg';
import pythonImg from '../../Images/python.png';
import javaImg from '../../Images/java.png';
import nodeImg from '../../Images/node.png';

export default class Language extends Component {
  
  determineImage(title) {

    switch(title){
      case "C++":
        return cppImg;

      case "Python":
        return pythonImg;

      case "R":
        return rImg;

      case "NodeJS":
        return nodeImg;

      case "Java":
        return javaImg;

      case "HTML & CSS":
        return htmlImg;

      case "Android":
        return androidImg;

      case "JavaScript":
        return jsImg;

      case "ReactJS":
        return reactImg;

      case "Pug/Jade":
        return pugImg;

      default:
        return cppImg;
    }
  }

  render() {

    return (
      <Item>
        <Item.Image size='tiny' src={this.determineImage(this.props.title)} alt='LanguageImg' />
        <Item.Content verticalAlign='top'>
          <Header size='large'>{this.props.title}</Header>
          <Item.Description>
            {this.props.description}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
} // Lab.js
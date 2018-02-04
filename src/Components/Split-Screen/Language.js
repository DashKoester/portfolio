import React, { Component } from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';
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
import semanticImg from '../../Images/semanticUILogo.png';
import bootstrapImg from '../../Images/bootstrap.png';

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

      case "Semantic UI":
        return semanticImg;

      case "Bootstrap":
        return bootstrapImg;

      case "Pug/Jade":
        return pugImg;

      default:
        return cppImg;
    }
  }

  render() {

    return (
      <Grid.Column className='language' center='true'>
        <Image src={this.determineImage(this.props.title)} alt='LanguageImg' />
        <Header size='large' textAlign='center'>{this.props.title}</Header>
        {this.props.description}
      </Grid.Column>      
    );
  }
} // Language.js
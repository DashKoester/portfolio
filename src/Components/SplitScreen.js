import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';

export default class SplitScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      leftClassName: "",
      rightClassName: "",
      containerClassName: ""
    };

    this.leftMouseEnter = this.leftMouseEnter.bind(this);
    this.leftMouseLeave = this.leftMouseLeave.bind(this);
    this.rightMouseEnter = this.rightMouseEnter.bind(this);
    this.rightMouseLeave = this.rightMouseLeave.bind(this);
  }
  
  componentDidMount(){
    this.setState({
      leftClassName: "split left",
      rightClassName: "split right",
      containerClassName: "ss-container"
    })
  }
  
  leftMouseEnter() {
    this.setState({
      containerClassName: "ss-container hover-left"
    })
  }
  
  leftMouseLeave() {
    this.setState({
      containerClassName: "ss-container"
    })  
  }

  rightMouseEnter() {
    this.setState({
      containerClassName: "ss-container hover-right"
    })
  }
  
  rightMouseLeave() {
    this.setState({
      containerClassName: "ss-container"
    })
  }

  render() {

    return (
      <div className={this.state.containerClassName}>
        <div className={this.state.leftClassName} onMouseEnter={this.leftMouseEnter} onMouseLeave={this.leftMouseLeave}>
          <Header as='h1'>The Programmer</Header>
          <Button className='ss-button' inverted animated='fade' onClick={this.props.handleLeftClick}>
            <Button.Content visible>
              LEARN MORE
            </Button.Content>
            <Button.Content hidden>
              View Technical Experience
            </Button.Content>
          </Button>
        </div>

        <div className={this.state.rightClassName} onMouseEnter={this.rightMouseEnter} onMouseLeave={this.rightMouseLeave}>
          <Header as='h1'>The Neuroscientist</Header>
          <Button className='ss-button' inverted animated='fade' onClick={this.props.handleRightClick}>
            <Button.Content visible>
              LEARN MORE
            </Button.Content>
            <Button.Content hidden>
              View Research Experience
            </Button.Content>
          </Button>
        </div>
      </div>
    );
  }
}

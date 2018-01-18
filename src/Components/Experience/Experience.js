
import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';  

  export default class Experience extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        coverVisible: null
      }
    }
    
    componentDidMount = () => 
      this.setState({
        coverVisible: true
      })
    
    
    toggleVisibility = () => 
     this.setState({ 
        coverVisible: !this.state.coverVisible
    })

    render(){
      return(
        <div className='experience-content'>
        <Header content={this.props.title} />
        </div>
    );
  }
}
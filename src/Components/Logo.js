import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class Logo extends Component {

  constructor(props){
    super(props);

    this.state = {
      logo: "",
    };

    this.expandLogo = this.expandLogo.bind(this);
    this.collapseLogo = this.collapseLogo.bind(this);
  }

  componentDidMount(){
    this.setState({
      logo: "dk"
    });
  }

  // expand logo to full name on mouse enter
  expandLogo(){
    this.setState({
      logo: "dashiell koester"
    });
  }

  // collapse logo to initials on mouse leave
  collapseLogo(){
    this.setState({
      logo: "dk"
    });
  }

  render() {

    return (
        <div>
          <Header
            id='logo'
            as='h1'
            textAlign='center'
            onMouseEnter={this.expandLogo}
            onMouseLeave={this.collapseLogo} >
            {this.state.logo}
          </Header>       
        </div>
    )
  }
}
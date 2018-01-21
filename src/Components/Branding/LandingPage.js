import React, { Component } from 'react';
import { Header, Icon, Modal, Button } from 'semantic-ui-react';
import backgroundImage from '../../Images/landingPage.jpg';
import conciseResume from '../../Images/conciseResume.pdf';
import fullResume from '../../Images/fullResume.pdf';

const containerStyle = {
  background: "url(" + backgroundImage + ") no-repeat center center",
  backgroundSize: "cover",
  opacity: '.7',
  height: '100vh',
  width: '100%',
  display: 'flex',
  backgroundAttachment: 'fixed'
};


export default class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: ''
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleVisibility = () => {
    if (this.state.width === '') {
      this.setState({
        width: '15%'
      });
    }
    else {
      this.setState({
        width: ''
      });
    }
  }

  handleScroll = () => {
    if (this.state.width === '15%') {
      this.setState({
        width: ''
      });
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        <div className='lp-menu-container' onClick={this.toggleVisibility}>
          <div className='lp-menu-button'>
            <Icon name='bars' bordered size='huge' link onClick={this.toggleVisibility} />
          </div>
          <div className='sidenav' style={this.state}>
            <a href="javascript:void(0)" className="closebtn" onClick={this.toggleVisibility}>&times;</a>
            <div className='sidenav-icon'>
              <a href='https://www.github.com/DashKoester'>
                <Header inverted icon>
                  <Icon name='github' link size='huge' inverted />
                  <Header.Subheader>
                    GitHub
                </Header.Subheader>
                </Header>
              </a>
              <a href='https://www.gitlab.com/DashKoester'>
                <Header inverted icon>
                  <Icon name='gitlab' link size='huge' color='red' />
                  <Header.Subheader>
                    GitLab
                  </Header.Subheader>
                </Header>
              </a>
              <a href="javascript:void(0)">
                <Modal
                  size='tiny'
                  dimmer='blurring'
                  trigger={
                    <Header inverted icon>
                      <Icon name='mail' link size='huge' color='teal' />
                      <Header.Subheader>
                        Email
                      </Header.Subheader>
                    </Header>
                  }>
                  <Modal.Header>Email Me!</Modal.Header>
                  <Modal.Content>
                    <p>Feel free to contact me at <a href='mailto:dashkoester@gmail.com?subject=Portfolio%20Contact' >dashkoester@gmail.com</a></p>
                  </Modal.Content>
                </Modal>
              </a>
            </div>
          </div>
        </div>
        <div className='lp-header-container'>
          <div className="lp-header">
            <div className='lp-header-name'>
              <h1>dashiell</h1>
              <h1>koester</h1>
            </div>
            <div className='lp-header-extra'>
              <p>NEUROSCIENCE</p>
              <p>COMPUTER SCIENCE</p>
              <p>PHILOSOPHY</p>
            </div>
          </div>
        </div>
        <div className='lp-logo-container'>
          <Modal
            basic
            size='tiny'
            dimmer='blurring'
            trigger={<div className='lp-resume-container'><Header as='h2' inverted icon size='huge'>
              <Icon name='download' size='tiny' />Resume</Header></div>}>
            <Modal.Header>
              <Header content='Which Version Would You Prefer?' textAlign='center' size='large' inverted dividing />
            </Modal.Header>
            <Modal.Content>
              <a href={conciseResume} download='Concise Resume - Dashiell Koester'>
                <Button inverted size='massive'>Consise Resume</Button>
              </a>
              <a href={fullResume} download='Full Resume - Dashiell Koester'>
                <Button inverted floated='right' size='massive'>Full Resume</Button>
              </a>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}
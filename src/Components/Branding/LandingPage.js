import React, { Component } from 'react'
import { Header, Icon, Modal, Button, Popup } from 'semantic-ui-react'
import backgroundImage from '../../Images/landingPage.jpg'
import conciseResume from '../../Images/conciseResume.pdf'
import fullResume from '../../Images/fullResume.pdf'
import AboutMe from '../Branding/AboutMe'

const containerStyle = {
  background: "url(" + backgroundImage + ") no-repeat center center",
  backgroundSize: "cover",
  opacity: '.7',
  height: '100vh',
  width: '100%',
  display: 'flex',
  backgroundAttachment: 'fixed'
};

const openBracket = '{';
const endBracket = '}';


export default class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: ''
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.closeNavbar);
  }

  openNavbar = () => {
    if (this.state.width !== '15%'){
      this.setState({
        width: '15%'
      });
    }
  }

  closeNavbar = () => {
    if (this.state.width !== ''){
      this.setState({
        width: ''
      });
    }
  }

  render() {
    return (
      <div style={containerStyle} onClick={this.closeNavbar}>
        <div className='lp-menu-container'>
          <div className='lp-menu-button'>
            <Icon name='bars' bordered size='huge' link onClick={this.openNavbar} />
          </div>
          <div className='sidenav' style={this.state}>
            <a href="javascript:void(0)" className="closebtn">&times;</a>
            <div className='sidenav-icon'>
              <a href='https://www.github.com/DashKoester'>
                <Popup
                  position='right center'
                  offset={10}
                  trigger={
                    <Header inverted icon>
                    <Icon name='github' link size='huge' inverted />
                      <Header.Subheader>
                        GitHub
                      </Header.Subheader>
                    </Header>
                  }
                  content='Primary code repository'
                />
              </a>
              <a href='https://www.gitlab.com/DashKoester'>
                <Popup
                position='right center'
                offset={10}
                trigger={
                  <Header inverted icon>
                  <Icon name='gitlab' link size='huge' color='red' />
                    <Header.Subheader>
                      GitLab
                    </Header.Subheader>
                  </Header>
                }
                content='Secondary code repository'
                on='hover'
              />
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
                    <p>Please contact me at <a href='mailto:dashkoester@gmail.com?subject=Portfolio%20Contact' >dashkoester@gmail.com</a></p>
                  </Modal.Content>
                </Modal>
              </a>
            </div>
          </div>
        </div>
        <div className='lp-header-container' onClick={this.closeNavbar}>
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
        <div className='lp-logo-container' onClick={this.closeNavbar}>
				<Modal
					size='fullscreen'
					dimmer='blurring'
					closeIcon
					trigger={
						<div className='lp-logo-about-me'>
							<Header as='h2' inverted>
								<Icon name='user circle outline' />
								<Header.Content>
									About Me
								</Header.Content>
							</Header>
						</div>
					}>
					<Modal.Content>
						<AboutMe />
					</Modal.Content>
				</Modal>
                  
          <Modal
            basic
            size='tiny'
            dimmer='blurring'
            trigger={
              <div className='lp-resume-download'>
              <Popup
                position='left center'
                trigger={
                    <Icon link name='arrow circle outline down' size='huge'/>
                  }
                  content='Download My Resume!'
                  />
              </div>
            }>
            <Modal.Header>
              <Header content='Which Version Would You Prefer?' textAlign='center' size='large' inverted dividing />
            </Modal.Header>
            <Modal.Content>
              <a href={conciseResume} download='Concise Resume - Dashiell Koester'>
                <Button inverted size='massive'>Concise Resume</Button>
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
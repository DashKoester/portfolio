import React, { Component } from 'react';
import { Button, Reveal, Header } from 'semantic-ui-react';

// showcases a technical skill in skillList
export default class Test extends Component {

  render() {
    return (

      <div>
        <Reveal animated='move' >
          <Reveal.Content visible className='work-content-cover'>
          <div >
            <Header content='WORK EXPERIENCE' textAlign='center' inverted size='huge' className='additional-experience-header' />
            <Button className='additional-experience-buttons' inverted animated='fade' fluid onClick={this.swapVisibility}>
                <Button.Content visible>
                  LEARN MORE
                </Button.Content>
                <Button.Content hidden>
                  View Work Experience
                </Button.Content>
              </Button>
            </div>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Header content='GUCCI GANG' />
          </Reveal.Content>
        </Reveal>
        </div>
      );
  }
} // Test.js
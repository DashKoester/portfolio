import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

// showcases a technical skill in skillList
export default class Lab extends Component {

  render() {
    return (
      <div className='lab'>
        <Header content='Lab Name' size='huge' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque urna, ultricies at leo in, facilisis vehicula augue. Sed suscipit nunc congue, lobortis dui quis, vulputate quam. Nulla eu est molestie, venenatis risus vitae, dapibus felis. Phasellus ut dapibus orci. Suspendisse convallis, elit in porta vehicula, sem est bibendum sem, in suscipit purus dolor sit amet ipsum. In iaculis convallis eros, in auctor mauris cursus id. Suspendisse et facilisis nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sed nibh laoreet, ultricies sem et, sollicitudin arcu. Integer eget arcu sed risus ultrices ornare id nec libero. Integer ultrices dictum dolor ut feugiat. Vestibulum vitae ante quis tortor pharetra sodales. Curabitur lacinia elit in volutpat gravida.
          Maecenas porta, augue vitae ullamcorper posuere, urna mi molestie risus, volutpat viverra mauris dui sit amet massa. Donec nec enim facilisis, vehicula ante aliquam, volutpat ligula. Phasellus sodales vel eros eu mollis. Donec maximus tristique ipsum eu dictum. Donec ornare diam nec aliquet aliquam. Ut dapibus, sapien a suscipit lobortis, nisl massa vestibulum nulla, nec bibendum turpis nulla in ipsum. Aliquam nec enim vitae odio accumsan tempor. Nulla nec neque et eros dignissim commodo.
        </p>
      </div>
    );
  }
} // Course.js
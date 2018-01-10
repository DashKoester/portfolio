import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Components/App';
// import Logo from './Components/Logo';
import Branding from './Components/Branding';
import Resume from './Components/Resume';
import Logo from './Components/Logo';


// ReactDOM.render(<Logo />, document.getElementById('logo-screen'));
ReactDOM.render(<Branding />, document.getElementById('logo-screen'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

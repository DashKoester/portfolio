import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './Components/App';
// import Logo from './Components/Logo';
import Branding from './Components/Branding/Branding';

ReactDOM.render(<Branding />, document.getElementById('logo-screen'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
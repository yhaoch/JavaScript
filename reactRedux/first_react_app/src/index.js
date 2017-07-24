import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClickCounter from './ClickCounter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	//render App component..
	//<App />, 
	//now we are gonna render a new component name clickcount..
	<ClickCounter />,
	document.getElementById('root'));

registerServiceWorker();

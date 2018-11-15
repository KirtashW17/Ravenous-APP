import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import {business,Business} from './components/Business/Business.js';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

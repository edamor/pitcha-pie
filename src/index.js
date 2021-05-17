import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyle/index.css';
import './globalStyle/colors.css';
import './globalStyle/fonts.css';
import './globalStyle/reference.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
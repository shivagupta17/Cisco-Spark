import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

(() => {
  //Incorporate BootStrap into the Index.HTML
  const bsStyleLink = document.createElement('link');
  const bsCDN =
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
  bsStyleLink.setAttribute('href', bsCDN);
  bsStyleLink.setAttribute('rel', 'stylesheet');
  document.head.appendChild(bsStyleLink);

  //Add React Component
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(<App/>, app);
}())

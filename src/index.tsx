import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.scss';

// Hot Module Replacement config with parcel
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector('#container'));

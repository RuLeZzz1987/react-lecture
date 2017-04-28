import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/**
 * @param {Object} ReactElement
 * @param {Object} DOMElement
 * @param {Function} callback
ReactDOM.render({ReactElement}, {DOMElement}, [callback]);
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

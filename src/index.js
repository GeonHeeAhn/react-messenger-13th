import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
process.env.CI = false
ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

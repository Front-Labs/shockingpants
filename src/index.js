import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SliderJS from './SliderJS.js';
// import Featured from './Featured.js';
import Toggle from './Toggle';
import reportWebVitals from './reportWebVitals';
import App from './App';


ReactDOM.render(<Toggle />, document.getElementById('root'));
  
ReactDOM.render(
  <React.StrictMode>
    <App/ >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

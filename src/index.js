import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import SliderJS from './SliderJS.js';
import Featured from './Featured.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Featured/ >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <div style={{position: "relative"}}>
  <SliderJS />
</div> */}
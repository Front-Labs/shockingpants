import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import EmbeddedPlayer from './components/Embeddedplayer/Embeddedplayer';

const routs = (
  < BrowserRouter >
     <div>
        <Route exact path="/" component={App} />
        <Route path="/embeddedplayer" component={ EmbeddedPlayer } />
     </div>
  </ BrowserRouter >
);

ReactDOM.render(routs, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App/ >
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

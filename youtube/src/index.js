import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

//Due to this Strict mode React compomnent Demo is being called twice , because
// Strict mode works like that just to confirm it is rendered correctly .
//Removing this strict mode will stop rendering twice.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

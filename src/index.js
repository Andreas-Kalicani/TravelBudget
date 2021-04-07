import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import reportWebVitals from './reportWebVitals';
import Chart from "react-google-charts";
// or
import { Chart } from "react-google-charts";
// or
const { Chart } = require("react-google-charts");
// or
var Chart = require("react-google-charts").Chart;
>>>>>>> 0091a47ba47d7ef4e4b287b8f8eeb4eede717cae

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



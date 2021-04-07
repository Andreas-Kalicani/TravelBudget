import React from 'react';
import logo from './logo.svg';
import './App.css';
import Budgetprec from "./components/dashboard-components//Budgetprec.js"; 
var Chart = require("react-google-charts").Chart;

import './App.css';


function App() {
  return (
    <div className="App">
    < Budgetprec />
      <h1>Hello Budget-app</h1>
      <p>Testing</p>
    </div>
  );
}

export default App;

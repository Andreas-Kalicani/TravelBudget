import React from 'react';
import logo from './logo.svg';
import './App.css';
import Budgetprec from "./componets/Budgetprec.js"; 
var Chart = require("react-google-charts").Chart;


function App() {
  return (
    <div className="App">
   < Budgetprec />
    </div>
  );
}

export default App;

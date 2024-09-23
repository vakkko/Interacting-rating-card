import "./App.css";
import StarImg from "./StarImg";
import MainContent from "./MainContent";
import ThankYou from "./ThankYou";
import React, { useState } from 'react';

function RateComponent() {
  return (
    <div className="main-container">
      <StarImg />
      <MainContent />
    </div>
  );
}

function FinishComponent() {
  return (
    <div>
      <ThankYou />
    </div>
  );
}

function App() {
 
  return (
    <div>
     <RateComponent />
    </div>
  );
}

export default App;


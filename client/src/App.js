import React from 'react';
import NavBar from "./components/NavBar"
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
  );
}

export default App;

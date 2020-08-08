import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar/>
      <Header/>
    </Router>
  );
}

export default App;

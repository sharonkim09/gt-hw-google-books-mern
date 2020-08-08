import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Search from "./pages/Search";
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar/>
      <Header/>
      <Route exact path="/search" component={Search}/>
    </Router>
  );
}

export default App;

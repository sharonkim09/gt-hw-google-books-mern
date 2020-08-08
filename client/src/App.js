import React from 'react';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavBar/>
      <Header/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/About';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;

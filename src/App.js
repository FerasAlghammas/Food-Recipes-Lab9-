import './App.css';
import React from "react";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div>
        <h1>Food Recipes</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>AboutUs</Link>
        </nav>
        <Routes />
      </div>
    </Router>
  );
}

export default App;

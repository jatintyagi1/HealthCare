import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Routing from './Routes';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
           <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Red from './colors/Red'
import Yellow from './colors/Yellow';
import Blue from './colors/Blue';
import Green from './colors/Green';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
          <Navbar/>
          <Red/>
          <Green/>
          <Blue/>
          <Yellow/>
          <Footer/>
          <Switch>
            <Route exact path='/about' component={About}/>
          </Switch>
      </div>
    </Router>
  );
}
export default App;

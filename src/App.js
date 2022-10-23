import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects'; 


import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Header";
import ContactForm from "./components/Contact";
import Skills from "./components/Skills";
import About from "./components/About";


function App() {

  return (
    <Router>
    <div>
      <Navigation />
      <main>
        <Switch>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/contact" component={ContactForm}/>
         <Route path="/projects" component={Projects}/>
         <Route path="/" component={Home}/>
         </Switch>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

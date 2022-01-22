import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Menu from './pages/Menu'
import About from "./pages/About";
import Contact from "./pages/Contact"

export default function () {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route  path='/' exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

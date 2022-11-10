import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import About from './components/About/AboutUs';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import Reservation from './components/Reservation/Reservation';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';


//import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  return (
    <Router>
      <Navbar />
      <Route  exact path="/"> <Home /> </Route>
      <Route  exact path="/menu"> <Menu /> </Route>
      <Route  exact path="/reservation"> <Reservation /> </Route>
      <Route  exact path="/about"> <About /> </Route>
      <Route  exact path="/review"> <Review /> </Route>
      <Route  exact path="/contact"> <Contact /> </Route>
      <Footer />
    </Router>
  );
}

export default App;

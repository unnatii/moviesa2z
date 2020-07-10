import React from "react";
import Nav from "./components/layout/nav";
import Footer from "./components/layout/footer";
import Home from "./components/home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/movie";

function App() {
  return (
    
      <Router>
        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/movie/:id" component={Movie} />
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;

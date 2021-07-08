import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { GameScreen } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={GameScreen} />
      </Router>
    </div>
  );
}

export default App;

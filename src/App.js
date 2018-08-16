import React, { Component } from "react";
import "./Assests/css/default.min.css";

//components

import Header from "./components/headerComponents/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />
      </div>
    );
  }
}

export default App;

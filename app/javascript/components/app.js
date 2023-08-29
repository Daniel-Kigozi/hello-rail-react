import React from "react";
import Greeting from "../components/greeting";
import "../style.css";

const App = () => {
  return (
    <div>
      <h2 className="greeting-title">Welcome to the greeting website!</h2>
      <div className="greeting-text">
        <Greeting />
      </div>
    </div>
  );
};

export default App;
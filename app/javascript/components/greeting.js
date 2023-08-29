import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const fetchRandomGreeting = async () => {
      try {
        const response = await axios.get("/greetings/random");
        setGreeting(response.data.greeting);
      } catch (error) {
        console.error("Error fetching greeting:", error);
      }
    };

    fetchRandomGreeting();
  }, []);

  return (
    <div className="greeting-card">
      <h2 className="greeting-title">Greetings:</h2>
      <h4 className="greeting-text">{greeting}</h4>
    </div>
  );
};

export default Greeting;
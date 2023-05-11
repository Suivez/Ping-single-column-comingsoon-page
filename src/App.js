import { useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import illustration from "./images/illustration-dashboard.png";

export default function App() {
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleButton = (event) => {
    event.preventDefault();

    if (inputRef.current.value == null) {
      setError("Please provide a valid email address");
      setIsActive(true);
    } else if (!isValidEmail(inputRef.current.value)) {
      setError("Please provide a valid email address");
      setIsActive(true);
    } else if (isValidEmail(inputRef.current.value)) {
      setError("");
      setIsActive(false);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>
          We are launching <span>soon!</span>
        </h1>
        <p>Subscribe and get notified</p>

        <form>
          <div className="field">
            <input
              style={{
                borderColor: isActive ? "hsl(354, 100%, 66%)" : ""
              }}
              ref={inputRef}
              type="text"
              placeholder="Your email adress..."
            />
            <span className="error">{error}</span>
          </div>
          <button onClick={handleButton}>Notify Me</button>
        </form>

        <picture>
          <img src={illustration} alt="illustration" />
        </picture>
      </div>
      <Footer />
    </div>
  );
}

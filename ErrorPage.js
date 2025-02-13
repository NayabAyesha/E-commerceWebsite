import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="continer">
        <h2>404</h2>
        <h3>UH OH! You're lost.</h3>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Link to="/">
          <button className="go-back-btn">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

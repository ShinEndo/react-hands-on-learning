import React from "react";
import ReactDOM from 'react-dom/client';
import PropTypes from "prop-types";

function App({ name, using,status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{using ? "used here" : "not used here"}</p>
      <h2>We're {status === "Open" ? "Open!" : "Closed!"}</h2>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  using: PropTypes.bool,
  status: PropTypes.string.isRequired
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App name="React" using={true} status="Open"/>
  );

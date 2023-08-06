import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App({name}){
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

ReactDOM.render(
    <App name="React" />,
    document.getElementById("root")
);
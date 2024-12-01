import { useState, useContext } from "react";
import "../App.css";
import { RouteContext } from "../context/RouteContext";

function Results() {
  const {routes} = useContext(RouteContext);
  return (
    <div className="maps">
      <h1>Your Routes</h1>
        {routes.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br/>
            </span>
        ))}
    </div>
  );
}

export default Results;

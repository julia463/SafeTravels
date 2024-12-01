import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RouteForm from "./components/RouteForm";
import { RouteContext } from "./context/RouteContext";
import { RouteContextProvider } from "./context/RouteContext";
import Results from "./components/Results";

function App() {


  const { hasResponse, routes, setHasResponse, data, setData, page, setPage, setCanSubmit,  } = useContext(RouteContext);
  
  const resetApp = () => {
    setHasResponse(false)
    setData(
      {
        startingLocation: "",
        endingLocation: "",
        timeOfDay: "",
        preferredMode: "",
        gender: "",
        groupSize: "",
      }
    )
    setPage(0)
  }
  return (
    <div>
      <h1>Safe Travels જ⁀➴</h1>
      {hasResponse ? (
        <div>
          <Results />
          < br/>
          <button onClick={resetApp}>Start Over</button>
        </div>
      ) : (
        <RouteForm />
      )}
    </div>
  );
}

export default App;

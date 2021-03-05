import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "./Mainstage";
import "./styles.css";

function App() {
  return (
    <Mainstage
      onSelectSeat={seatId => {
        console.log("selected - " + seatId);
      }}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
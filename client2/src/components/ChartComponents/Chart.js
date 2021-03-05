import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "./Mainstage";
import "./styles.css";
import {Container} from '../Styles'

function App() {
  return (
    <Container>
    <Mainstage
      onSelectSeat={seatId => {
        console.log("selected - " + seatId);
      }}
    /></Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

//chart is displayed from THIS folder
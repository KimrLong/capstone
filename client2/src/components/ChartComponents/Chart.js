import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "./Mainstage";
import "./styles.css";
import {Container} from '../Styles';
import {Row, Col} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Mainstage
            onSelectSeat={seatId => {
              console.log("selected - " + seatId);
            }}
          />
        </Col>
        <Col>       
        </Col>
      </Row>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

//chart is displayed from THIS folder
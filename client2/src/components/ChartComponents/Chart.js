import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "./Mainstage";
import {Link} from 'react-router-dom';
import "./styles.css";
import {Container} from '../Styles';
import {Row, Col} from 'react-bootstrap';
// import {Paper} from '../Styles';
import Payment from '../PaymentComponents/Payment';






function App() {
  return (
    <Container>
      <Row>
        <Col>This is a space holder
        </Col>
        <Col>

        </Col>
        <Col>  
          <Payment></Payment>
        </Col>
      </Row><br/>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
        <Mainstage
            onSelectSeat={seatId => {
              console.log("selected - " + seatId);
            }}
          />
          </Col>
      </Row>
    </Container>
  );
}


export default App;

//chart is displayed from THIS folder
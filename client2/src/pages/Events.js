import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "../components/ChartComponents/Mainstage";
import {Link} from 'react-router-dom';
import "../components/ChartComponents/styles.css";
import {Container} from '../components/Styles';
import {Row, Col} from 'react-bootstrap';
// import {Paper} from '../Styles';
import Payment from '../components/PaymentComponents/Payment';
import '../assets/Events.css'

function Events() {
  return (<>

    <Container className="events">
      <Row className="events-container">
        <Col>
        <Payment></Payment>
        </Col>
        <Col>
        <Mainstage
            // onSelectSeat={seatId => {
            //   console.log("selected - " + seatId);
            // }}
          />
          <div> </div>
          </Col>
      </Row>
    </Container>
    </>
  );
}


export default Events;

//chart is displayed from THIS folder


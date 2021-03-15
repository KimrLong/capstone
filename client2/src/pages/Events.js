import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "../components/ChartComponents/Mainstage";
import {Link} from 'react-router-dom';
import {Container} from '../components/Styles';
import {Row, Col} from 'react-bootstrap';
// import {Paper} from '../Styles';
import Payment from '../components/PaymentComponents/Payment';
import Card from '../components/EventComponents/cards';

function Events() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h1>Culture Club Events</h1>
        </Col>
        <Col></Col>
      </Row><br/>
      <Row>

        <Col><Card/></Col>

      </Row>
    </Container>
  );
}

export default Events;
import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "../components/ChartComponents/Mainstage";
import {Link} from 'react-router-dom';
import {Container} from '../components/Styles';
import {Row, Col} from 'react-bootstrap';
// import {Paper} from '../Styles';
import Payment from '../components/PaymentComponents/Payment';
import Card from '../components/EventComponents/cards';

function Holder() {
  return (
    <Container>
      <Row>
        <Col>
          <Card/>
        </Col>
        <Col>

        </Col>
        <Col>  

        </Col>
      </Row><br/>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>

          </Col>
      </Row>
    </Container>
  );
}

export default Holder;
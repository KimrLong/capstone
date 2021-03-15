import React from "react";
import {Container} from '../components/Styles';
import {Row, Col} from 'react-bootstrap';
// import {Paper} from '../Styles';

import Card from '../components/EventComponents/cards';
// import  '../assets/Home.css'


function Events() {
  return (
    <Container fluid>
      <Row className="firstRow">
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
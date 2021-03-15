import React from "react";
import ReactDOM from "react-dom";
import Mainstage from "../components/ChartComponents/Mainstage";
import {Link} from 'react-router-dom';
import {Container} from '../components/Styles';
import {Row, Col} from 'react-bootstrap';
// import {Paper} from '../Styles';
import Payment from '../components/PaymentComponents/Payment';
import '../assets/Purchase.css'
function Purchase() {
  return (<>
    <Container>
      <Row className="events-container rowStyle">
        <Col>
        <Payment></Payment>
        </Col>
        <Col>
        <Mainstage
            // onSelectSeat={seatId => {
            //   console.log("selected - " + seatId);
            // }}
          />
          </Col>
      </Row>
    </Container>
    </>
  );
}
export default Purchase;
//chart is displayed from THIS folder


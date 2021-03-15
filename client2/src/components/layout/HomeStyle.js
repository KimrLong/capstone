import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap';
import  '../../assets/Home.css'



const HomeStyle = () => {
    return (
        <>
<Container fluid style={{padding:"30px"}}>
    <Row className="firstRow">
        <Col className="col2-text" sm={{span:4}} lg={{span: 3, offset:2}} md={{span: 2, offset:2}}>Tickets for the small venues for the shows that matter to you.</Col>
        <Col md={{span:2}} ><button className="topButton"> Buy tickets today</button> </Col>
        <Col className="middlePic" ><img src="rockstar.jpg"  height="350px"></img></Col>
        <div className="smallText"></div>
    </Row>
    <Row className="secondRow">
        <Col sm="2" md={{span:6, offset:3} }className="middleText">The Culture Club serves as a hub for dance, music, comedy, lectures and more. Come check out our famous spot that has launched many careers.  </Col>
    </Row>
    <Row className="thirdRow">
        <Col className="lastText" md={{span:8}}><img src="purpleStage.jpg"></img>  </Col>
        <Col className="lastText" md={{span:4}}>More than a website that sells tickets. We specialize in making sure you can select the seat you desire at the event you are looking for. Whether you are hosting an event or looking for one, we are here to help. </Col>
    </Row>
    <Row className="fourthRow">
        <Col className="changePosition" xs="3" md={{span:3,offset:1}}> <button className="bottomButton"> Chat</button> </Col>
        <Col xs="3" md={{span:3,offset:1}}><button className="bottomButton">Find event</button></Col>
        <Col  xs="3"md={{span:3,offset:1}}><button className="bottomButton">Sign up</button></Col>
    </Row>
    <Row className="lastRow">
    </Row>
</Container>
        </>
    )
}

export default HomeStyle

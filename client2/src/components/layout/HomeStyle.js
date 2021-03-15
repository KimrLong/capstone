import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap';
import  '../../assets/Home.css'



const HomeStyle = () => {
    return (
        <>
<Container fluid style={{padding:"30px"}}>
    <Row className="firstRow">

        <Col className="col2-text"lg="3" md={{span: 3, offset:2}}>A venue that hosts events for you by you.</Col>
        <Col md={{span:2}}><button className="topButton">Upcoming Events</button> </Col>
        <Col className="middleText" md={{span:2, offset:1}}><img src="rockstar.jpg"  className="img-rounded" height="350px"></img></Col>
        <div className="smallText"></div>
    </Row>

    <Row className="secondRow">
        <Col sm="2" md={{span:6, offset:3} }className="middleText">The Culture Club serves as a hub for dance, music, comedy, lectures and more. Come check out our famous spot that has launched many careers.  </Col>
    </Row>
    <Row className="thirdRow">
        <Col className="lastText" md={{span:8}}><img src="purpleStage.jpg"></img>  </Col>
        <Col className="lastText" md={{span:4}}>We are more than venue that sells tickets. We serve as a social platform to help you get connected with art seekers like yourself. Watch or even host an event with us!</Col>
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

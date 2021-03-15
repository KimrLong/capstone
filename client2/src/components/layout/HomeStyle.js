import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap';
import  '../../assets/Home.css'



const HomeStyle = () => {
    return (
        <>
<Container fluid style={{padding:"30px"}}>
    <Row className="firstRow">
        <Col className="col2-text"lg="3" md={{span: 3, offset:2}}>A venue that hosts events for you by you.</Col>
        <Col md={{span:2}}><Button className="btn">Upcoming Events</Button> </Col>
        <Col className="middleText" md={{span:2, offset:1}}><img src="rockstar.jpg"  className="img-rounded" height="350px"></img></Col>
        <div className="smallText">.</div>
    </Row>
    <Row className="secondRow">
        <Col sm="12"md={{span:6, offset:3} }className="middleText">Come see the stage that serves as a launching pad for many artist's careers. The culture club serves as a hub for dance, music, comedy and more. </Col>
    </Row>
    <Row className="thirdRow">
        <Col className="lastText" md={{span:8}}><img src="purpleStage.jpg"></img>  </Col>
        <Col className="lastText" md={{span:4}}>We are more than venue that sells tickets, we serve as a social platform you help you get connected with art seekers like yourself. Come watch or host an event with us!</Col>
    </Row>
    <Row className="fourthRow">
        <Col className="changePosition"md={{span:3,offset:1}}><Button className="btn2">Find an event</Button></Col>
        <Col md={{span:3,offset:1}}><Button className="btn2">Find an event</Button></Col>
        <Col md={{span:3,offset:1}}><Button className="btn2">Sign up</Button></Col>

    </Row>
    <Row className="footer">
    </Row>
</Container>
        </>
    )
}

export default HomeStyle

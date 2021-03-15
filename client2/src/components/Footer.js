import React from 'react';
import '../assets/Footer.css'
import  * as SiIcons from 'react-icons/si'
import  * as GrIcons from 'react-icons/gr'
import  * as FiIcons from 'react-icons/fi'
import  * as AiIcons from 'react-icons/ai'
import {Row, Col, Container, Button} from 'react-bootstrap';

const Footer = () => {
    return(
        <Container fluid >
            <Row className="bottom">
                <Col md={{span:4, offset:2}} style={{marginTop:"20px"}}>
                <h4> Contributing Team Members</h4>
                    <ul className="list-style">
                        <li><a href="https://matthewrobertsportfolio.netlify.app/">Matthew Roberts</a></li>
                        <li><a href="https://kimrlong.github.io/">Kim Long</a></li>
                        <li><a href="https://6041b53938eb5156db9dcf5d--netlifyportfolio.netlify.app/">Matthew Chun</a></li>
                    </ul>
                </Col>
                
                    <Col>
                    <h1><a href="https://github.com/matthewchun93/capstone"><SiIcons.SiGithub/></a></h1>
                    </Col>
                    <Col>
                        <h1><a href="#"><GrIcons.GrLinkedin/></a></h1>
                    </Col>
                    <Col>
                        <h1><a href="#"><FiIcons.FiInstagram/></a></h1>
                    </Col>
                    <Col>
                        <h1><a href="#"><FiIcons.FiTwitter/></a></h1>
                    </Col>
                    <Col>
                        <h1><a href="#"><AiIcons.AiOutlineFacebook/></a></h1>
                    </Col>
                    <Col>
                        <h1><a href="#"><AiIcons.AiFillMediumSquare/></a></h1>
                    </Col>
                    <Row style={{paddingTop:"20px"}}>
                        <p className="col-sm"> &copy;{new Date().getFullYear()}    <a href="https://github.com/Mattie-07/">Matthew Roberts</a>, <a href="https://github.com/KimrLong">Kim Long</a>, <a href="https://github.com/matthewchun93">Matthew Chun </a>              |  <a href="#">All Rights Reserved</a>  | <a href='#'>Terms of Service</a> | Privacy</p>
                    </Row>
            </Row>
        </Container>
        
    )
}

export default Footer
import React from 'react';
import '../assets/Footer.css'
import  * as SiIcons from 'react-icons/si'
import  * as GrIcons from 'react-icons/gr'
import  * as FiIcons from 'react-icons/fi'
import  * as AiIcons from 'react-icons/ai'
import {Row, Col, Container, Button} from 'react-bootstrap';

const Footer = () => {
    return(
        <Container fluid>
            <Row className="">
                <Col md={{span:4, offset:2}}> Test</Col>
            </Row>
        </Container>
//             <div className="main-footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <h4> Contributing Team Members</h4>
//                             <ul className="list-style">
//                                 <li><a href="https://matthewrobertsportfolio.netlify.app/">Matthew Roberts</a></li>
//                                 <li><a href="https://kimrlong.github.io/
// ">Kim Long</a></li>
//                                 <li><a href="https://6041b53938eb5156db9dcf5d--netlifyportfolio.netlify.app/
// ">Matthew Chun</a></li>
//                             </ul>
//                         </div>
//                         <div className="row">
//                         <div className="col">
//                             <h1><a href="https://github.com/matthewchun93/capstone"><SiIcons.SiGithub/></a></h1>
//                             </div>
//                         <div className="col">
//                             <h1><a href="https://github.com/matthewchun93/capstone"><GrIcons.GrLinkedin/></a></h1>
//                             </div>
//                         <div className="col">
//                             <h1><a href="https://github.com/matthewchun93/capstone"><FiIcons.FiInstagram/></a></h1>
//                             </div>
//                         <div className="col">
//                             <h1><a href="https://github.com/matthewchun93/capstone"><FiIcons.FiTwitter/></a></h1>
//                             </div>
//                         <div className="col">
//                             <h1><a href="https://github.com/matthewchun93/capstone"><AiIcons.AiOutlineFacebook/></a></h1>
//                             </div>
//                         <div className="col">
//                             <h1><a href="https://github.com/matthewchun93/capstone"><AiIcons.AiFillMediumSquare/></a></h1>
//                             </div>
//                     </div>
//                     </div>
//                 </div>
//                 <br />
//                 <div className="Row">
//                     <p className="col-sm"> &copy;{new Date().getFullYear()}    <a href="https://github.com/Mattie-07/">Matthew Roberts</a>, <a href="https://github.com/KimrLong">Kim Long</a>, <a href="https://github.com/matthewchun93">Matthew Chun </a>              |  <a href="#">All Rights Reserved</a>  | <a href='#'>Terms of Service</a> | Privacy</p>
//                 </div>
//             </div>
        
    )
}

export default Footer
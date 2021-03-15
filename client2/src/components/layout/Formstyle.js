import React, {useState} from 'react';
import Signup from '../../components/auth/SignupForm';
import FormSuccess from '../../components/auth/Success';
import {Row, Col, Container, Button} from 'react-bootstrap';
import '../../assets/Form.css'
import  '../../assets/Home.css'

const FormStyle =() =>{
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true)
    }
    return(
        <>
        <Container fluid >
        <Row className="firstRowOnForm">
            <Col>
                {!isSubmitted ?
                <Signup submitForm={submitForm} /> 
                : <FormSuccess/>}
                </Col>
            </Row>
        </Container>
            </>
    )
    
}

export default FormStyle

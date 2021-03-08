import React, {useState} from 'react';
import Signup from '../components/auth/SignupForm';
import FormSuccess from '../components/auth/Success';
import '../assets/Form.css'

function Form (){
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm(){
        setIsSubmitted(true)
    }
    return(
        <>
        
        <div className="form-container signup">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src='chairs.jpg' alt="chairs"
                className="form-img"></img>
            </div>
            {!isSubmitted ?
            <Signup submitForm={submitForm} /> 
            : <FormSuccess/>}
            </div>

    
            </>
    )
}

export default Form
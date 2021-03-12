import React from 'react';
import {Link} from 'react-router-dom';



const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success"> We have successfully processed your request!
            </div>
            <img src="love.jpg" style={{height:"450px", paddingLeft:"75px", paddingTop:"80px"}} alt="chairs"
            className="form-img-2"/>
            <Link to='./'><button className="successbtn">Home Page</button></Link>
        </div>
        
    )
}

export default FormSuccess

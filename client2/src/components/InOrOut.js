import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, NavDropdown} from 'react-bootstrap';

const InOrOut = props => {

    const propsArray = Object.values(props);
    
    if (propsArray[0].length === 0) {
        return (
            <>
            <Nav.Item>
                <Nav.Link ><Link style={{color:"rgb(17, 36, 119)"}} to="/form">Sign up</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{marginRight:"25px"}}><Link style={{color:"rgb(17, 36, 119)"}} to="/signin">Log In</Link></Nav.Link>
            </Nav.Item>
            </>
        )
    }
    else {
        return (
            <>
            <Nav.Item>
                <Nav.Link style={{marginRight:"8px"}}><Link style={{color:"rgb(17, 36, 119)"}} to="/signout">Sign Out</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={{marginRight:"8px"}}><Link style={{color:"rgb(17, 36, 119)"}} to="/account">My Account</Link></Nav.Link>
            </Nav.Item>
            </>
        )
    }
}

export default InOrOut

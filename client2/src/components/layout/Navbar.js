import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import  * as AiIcons from 'react-icons/ai'
import  * as IoIcons from 'react-icons/io'
import  * as RiIcons from 'react-icons/ri'
import  * as BsIcons from 'react-icons/bs'
import  * as FiIcons from 'react-icons/fi'
import  * as GiIcons from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {SidebarData} from '../SidebarData'
import '../../assets/Navbar.css'
import {IconContext} from 'react-icons';
import {Nav, NavDropdown} from 'react-bootstrap';
import InOrOut from '../InOrOut';

const Navbar =()=> {
    const authenticated = useSelector(state => state.auth.authenticated);
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
    <Nav variant="pills" className="navStyle" activeKey="1"  onSelect={handleSelect}>
        <NavDropdown title="Menu"  className="menuStyle p-sm-25">
            <NavDropdown.Item  className="itemStyle "><Link to="/"><AiIcons.AiFillHome style={{margin:"10px"}}/>Home</Link></NavDropdown.Item>
            {/* <NavDropdown.Item  className="itemStyle"><Link to="/account"><RiIcons.RiAccountCircleFill style={{margin:"10px"}}/>My Account</Link></NavDropdown.Item> */}
            {/* <NavDropdown.Item  className="itemStyle"><Link to="/cart"><FiIcons.FiShoppingCart style={{margin:"10px"}}/>Cart</Link></NavDropdown.Item> */}
            <NavDropdown.Item  className="itemStyle"><Link to="/events"><RiIcons.RiTicket2Fill style={{margin:"10px"}}/>Events</Link></NavDropdown.Item>
            <NavDropdown.Item  className="itemStyle"><Link to="/chat"><BsIcons.BsFillChatDotsFill style={{margin:"10px"}}/>Chat</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="ml">
            <Nav.Link className="iconStyle "><Link className="iconStyle mr-auto" to="/"> <GiIcons.GiDirectorChair className="iconStyle" style={{marginRight:"15px"}}></GiIcons.GiDirectorChair>The Culture Club</Link ></Nav.Link>
        </Nav.Item>
        <Nav.Item className="mr-auto">
            <Nav.Link><Link to="/form"></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item className="mr-auto">
            <Nav.Link ><Link to="/chat"></Link></Nav.Link>
        </Nav.Item>
        <InOrOut props={authenticated}/>
    </Nav>
    )}
export default Navbar




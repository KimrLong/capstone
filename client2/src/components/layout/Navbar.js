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
            <NavDropdown.Item  className="itemStyle"><Link to="/cart"><FiIcons.FiShoppingCart style={{margin:"10px"}}/>Cart</Link></NavDropdown.Item>
            <NavDropdown.Item  className="itemStyle"><Link to="/events"><RiIcons.RiTicket2Fill style={{margin:"10px"}}/>Events</Link></NavDropdown.Item>
            <NavDropdown.Item  className="itemStyle"><Link to="/chat"><BsIcons.BsFillChatDotsFill style={{margin:"10px"}}/>Chat</Link></NavDropdown.Item>
            {/* <NavDropdown.Item  className="itemStyle"><Link to="/holder"><BsIcons.BsFillChatDotsFill style={{margin:"10px"}}/>Holder</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><Link to="/support"><IoIcons.IoMdHelpCircle style={{margin:"10px"}}/>Contact Support</Link></NavDropdown.Item> */}
        </NavDropdown>
        <Nav.Item className="ml">
            <Nav.Link className="iconStyle "><Link className="iconStyle mr-auto" to="/"> <GiIcons.GiDirectorChair className="iconStyle" style={{marginRight:"15px"}}></GiIcons.GiDirectorChair>Biggest Small Venue</Link ></Nav.Link>
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

        /* <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'> 
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="navText">
                    <Link className="nav-text-right" style={{color:"#fff",paddingRight:"4px"}} to="/signin">Sign in     </Link> or   
                    <Link style={{color:"#fff",paddingLeft:"4px"}} to="/form">    Sign up today</Link>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}> 
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) =>{
                        return (
                            <li key={index} className={item.class}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>    */

    



    // )};        

//     )};        
    


        // <>
        // <Container>
        // <Row>
        // <IconContext.Provider value={{color:'#fff'}}>
        //     <div className="navbar">
        //         <Link to="#" className='menu-bars'> 
        //             <div onClick={showSidebar} style={{color:"#fff"}}> Menu</div>
        //         </Link>
        //         <div className="navText">
        //             <Link className="nav-text-right" style={{color:"#fff",paddingRight:"4px"}} to="/form">Log in     </Link> or   
        //             <Link style={{color:"#fff",paddingLeft:"4px"}} to="/form">    Sign up today</Link>
        //         </div>
        //     </div>
        //     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        //         <ul className='nav-menu-items' onClick={showSidebar}> 
        //             <li className="navbar-toggle">
        //                 <Link to="#" className='menu-bars'>
        //                     <AiIcons.AiOutlineClose />
        //                 </Link>
        //             </li>
        //             {SidebarData.map((item, index) =>{
        //                 return (
        //                     <li key={index} className={item.class}>
        //                     <Link to={item.path}>
        //                         {item.icon}
        //                         <span>{item.title}</span>
        //                     </Link>
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     </nav>
        //     </IconContext.Provider>
        //     </Row>
        //     </Container>
//         // </>   
//     )
    



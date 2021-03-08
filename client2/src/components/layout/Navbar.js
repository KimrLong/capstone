import React, {useState} from 'react'
import  * as FaIcons from 'react-icons/fa'
import  * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SidebarData} from '../SidebarData'
import '../../assets/Navbar.css'
import {IconContext} from 'react-icons'

function Navbar (){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className='menu-bars'> 
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="navText">
                    <Link className="nav-text-right" style={{color:"#fff",paddingRight:"4px"}} to="/form">Log in     </Link> or   
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
        </>   
    )
}

export default Navbar
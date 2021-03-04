import React from 'react'
import  * as FaIcons from 'react-icons/fa'
import  * as AiIcons from 'react-icons/ai'
import  * as IoIcons from 'react-icons/io'
import  * as RiIcons from 'react-icons/ri'
import  * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title:"Home",
        path:"/",
        icon:<AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title:"My account",
        path:"/account",
        icon:<RiIcons.RiAccountCircleFill />,
        class: 'nav-text'
    },
    {
        title:"Current Tickets",
        path:"/tickets",
        icon:<RiIcons.RiTicket2Fill/>,
        class: 'nav-text'
    },
    {
        title:"Chat",
        path:"/chat",
        icon:<BsIcons.BsFillChatDotsFill />,
        class: 'nav-text'
    },
    {
        title:"Contact Support",
        path:"/support",
        icon:<IoIcons.IoMdHelpCircle />,
        class: 'nav-text'
    }
]

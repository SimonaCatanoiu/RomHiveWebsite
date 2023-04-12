import React, {useState} from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar() {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle_slide = () => 
    {
        const mq = window.matchMedia( "(min-width: 600px)" );
        if (mq.matches) {
            setIsOpen (!isOpen);
        } else {
            setIsOpen(false);
            
        }

    }
    const menuItem=[
        {
            path:"/adminpage",
            name:"Home",
            icon:<LineStyleIcon/>
        },
        {
            path:"/adminPage/Users",
            name:"Users",
            icon:<PeopleAltIcon/>
        },
        {
            path:"/adminPage/Trips",
            name:"Trips",
            icon:<HolidayVillageIcon/>
        },
        {
            path:"/adminPage/Transactions",
            name:"Transactions",
            icon:<PaymentsIcon/>
        },
        {
            path:"/adminPage/Settings",
            name:"Settings",
            icon:<SettingsIcon/>
        }
    ]


  return (
        <div className="container_slide">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar_slide">
               <div className="top_section_slide">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo_slide">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars_slide">
                       <MenuIcon onClick={toggle_slide}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link_slide" activeclassName="active_slide">
                           <div className="icon_slide">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text_slide">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>

        </div>
  )
}
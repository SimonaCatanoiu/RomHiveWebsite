import React from 'react'
import "./Sidebar3.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

export default function Sidebar3() {
  return (
    <div className="sidebar">
        <div className='sidebarWrapper'>
            <div className="sidebarMenu">
                <h3 className='sidebarTitle'>
                    Quick Menu
                </h3>
                <ul className="sidebarList">
                <Link to="/adminpage" style={{textDecoration: 'none'}}>
                    <li className="sidebarListItem">
                        <LineStyleIcon className="sidebarIcon"/> 
                        Home
                    </li>
                </Link>
                <Link to="/adminPage/Users" style={{textDecoration: 'none'}}>
                    <li className="sidebarListItem">
                        <PeopleAltIcon className="sidebarIcon"/> 
                        Users
                    </li>
                </Link>
                <Link to="/adminPage/Trips" style={{textDecoration: 'none'}}>
                    <li className="sidebarListItem">
                        <HolidayVillageIcon className="sidebarIcon"/> 
                        Trips
                    </li>
                </Link>
                <Link to="/adminPage/Transactions" style={{textDecoration: 'none'}}>
                    <li className="sidebarListItem">
                        <PaymentsIcon className="sidebarIcon"/> 
                        Transactions
                    </li>
                </Link>
                <Link to="/adminPage/Settings" style={{textDecoration: 'none'}}>
                    <li className="sidebarListItem">
                        <SettingsIcon className="sidebarIcon"/> 
                        Settings
                    </li>
                </Link>
                </ul>
            </div>


        </div>
    </div>
  )
}

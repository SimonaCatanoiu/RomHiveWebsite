import React, {useState,useContext} from 'react';
import { MenuItems } from './MenuItems'; 
import './NavbarAdmin.css'
import '../Navbar/Navbar.css'
import  {ButtonNav} from '../Button/ButtonNav.js';
import {Link,useNavigate} from "react-router-dom"
import styled from 'styled-components'
import {AuthContext} from './../../context/AuthContext.js' 

const StyledLink = styled(Link)`
    text-decoration: none;
    color:white;
`;

export const NavbarAdmin =() => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate()
    const {user,dispatch} = useContext(AuthContext)

    const logout =() =>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }

    return(
        <nav className='NavbarItemsAdmin'>
            <h1 className='navbar-logo'>
            <StyledLink to="/adminPage">
                <img src="../../../images/logo2.png" className='navbar-logo-img'/>    
            </StyledLink>
            </h1>
            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
            <i className="material-symbols-outlined">{clicked ? "menu_open" : "menu"}</i>
            </div>
            <ul className={(!user && clicked) ? 'nav_menu active' : (!user && !clicked) ? 'nav_menu' : (user && clicked) ? 'nav_menu_user_set active' : 'nav_menu_user_set'}>
            {MenuItems(user,logout).map((item,index)=>
            {
                return (
                    <li key={index}>
                        <StyledLink to={item.url} onClick={() => setClicked(false)}>
                            <a className={item.cName} onClick={item.onClick}>{item.title}</a> 
                        </StyledLink>
                    </li>
                )
            })
            }
            </ul>
            <ButtonNav><a className="nav_button" onClick={logout}> Logout</a></ButtonNav>
           
        </nav>
    )

}

export default NavbarAdmin
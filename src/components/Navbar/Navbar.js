import React, {useState,useContext} from 'react';
import { MenuItems } from './MenuItems'; 
import './Navbar.css'
import  {ButtonNav} from '../Button/ButtonNav.js';
import {Link,useNavigate} from "react-router-dom"
import styled from 'styled-components'
import {AuthContext} from './../../context/AuthContext.js' 

const StyledLink = styled(Link)`
    text-decoration: none;
    color:white;
`;

const Navbar =() => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate()
    const {user,dispatch} = useContext(AuthContext)

    const logout =() =>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }

    return(
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>
            <StyledLink to="/">
                <img src="../../../images/logo2.png" className='navbar-logo-img'/>    
            </StyledLink>
            </h1>
            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
            <i className="material-symbols-outlined">{clicked ? "menu_open" : "menu"}</i>
            </div>
            <ul className={(!user && clicked) ? 'nav_menu active' : (!user && !clicked) ? 'nav_menu' : (user && clicked) ? 'nav_menu_user_set active' : 'nav_menu_user_set'}>
                
            {user ? (
                <li>
                    <StyledLink to='/EditProfile' onClick={() => setClicked(false)}>
                    <a className='nav_links' >Account</a> 
                    </StyledLink>
                    <StyledLink to='/Booked' onClick={() => setClicked(false)}>
                    <a className='nav_links' >Booked</a> 
                    </StyledLink>
                </li>
            ) : null}

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

            {user?<>
                <ButtonNav><a className="nav_button" onClick={logout}> Logout</a></ButtonNav>
            </>:
            <>
            <ButtonNav><StyledLink to="/signin"><a className="nav_button"> Sign In</a></StyledLink>
            </ButtonNav>
            <ButtonNav><StyledLink to="/SignUp"><a className="nav_button"> Sign Up</a></StyledLink>
            </ButtonNav>
            </>
            }

            
        </nav>
    )

}

export default Navbar
import React from 'react';
import { MenuItems } from './MenuItems'; 
import './Navbar.css'
import  {ButtonNav} from '../Button/ButtonNav.js';
import {Link} from "react-router-dom"
import styled from 'styled-components'
 
const StyledLink = styled(Link)`
    text-decoration: none;
    color:white;
`;

class Navbar extends React.Component {
    state = {clicked:false}
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                <StyledLink to="/">
                    <img src="../../../images/logo2.png" className='navbar-logo-img'/>    
                </StyledLink>
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                <i className="material-symbols-outlined">{this.state.clicked ? "menu_open" : "menu"}</i>
                </div>
                <ul className={this.state.clicked ? 'nav_menu active': 'nav_menu'}>
                    {MenuItems.map((item,index)=>
                    {
                        return (
                            <li key={index}>
                                <StyledLink to={item.url}>
                                    <a className={item.cName} onClick={() => this.setState({ clicked: false })} >{item.title}</a> 
                                </StyledLink>
                            </li>
                        )
                    })
                    }
                </ul>
                <ButtonNav><StyledLink to="/signin"><a className="nav_button"> Sign In</a></StyledLink>
                </ButtonNav>
                <ButtonNav><StyledLink to="/SignUp"><a className="nav_button"> Sign Up</a></StyledLink>
                </ButtonNav>
            </nav>
        )
    }
}

export default Navbar
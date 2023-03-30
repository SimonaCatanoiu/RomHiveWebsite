import React from 'react';
import { MenuItems } from './MenuItems'; 
import './Navbar.css'
import { Button } from '../Button/Button';
import {Link} from "react-router-dom"
import styled from 'styled-components'
 
const StyledLink = styled(Link)`
    text-decoration: none;
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
                    <img src="../../../images/logo2.png" className='navbar-logo-img'/>    
                </h1>
                <div className='menu-icon' onClick={this.handleClick}>
                <i className="material-symbols-outlined">{this.state.clicked ? "menu_open" : "menu"}</i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>
                    {
                        return (
                            <li key={index}>
                                <StyledLink to={item.url}>
                                    <a className={item.cName}>{item.title}</a> 
                                </StyledLink>
                            </li>
                        )
                    })
                    }
                </ul>
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
            </nav>
        )
    }
}

export default Navbar
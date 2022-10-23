import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';


class Header extends Component {
    constructor(props) {
        super(props);
    

      }

    render() {
        return(
            <div class="topnav">
                <a class="appName">FOOD ENGINE</a>
                <div className="topnav-right">
                    <NavLink className="nav-link"  to='/home'><img src='/user1.png' height="35" width="45" alt='userimg' /></NavLink>
                    <NavLink className="nav-link" to='/aboutus'><img src='/location1.png' height="30" width="41" alt='locationimg' /></NavLink>
                </div>
                    
            </div>
        );
    }
}


export default Header;
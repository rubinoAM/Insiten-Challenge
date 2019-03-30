import React, { Component } from 'react';
import '../styles/navbar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navbar-container">
                <nav>
                    <div className="nav-wrapper blue darken-4">
                    <a href="#" className="brand-logo">Insiten</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">One</a></li>
                        <li><a href="#">Two</a></li>
                        <li><a href="#">Three</a></li>
                    </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
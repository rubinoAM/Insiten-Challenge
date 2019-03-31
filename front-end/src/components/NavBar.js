import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navbar-container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <Link class="navbar-brand" to="/">Insiten</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link" href="#">FAQ</a>
                            <a class="nav-item nav-link" href="#">Contact</a>
                        </div>
                    </div>
                    <form class="form-inline nav-search">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default NavBar;
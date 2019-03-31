import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends Component{
    render(){
        return(
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                    <Link className="navbar-brand" to="/">Insiten</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">FAQ</a>
                            <a className="nav-item nav-link" href="#">Contact</a>
                        </div>
                    </div>
                    <form className="form-inline nav-search">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default NavBar;
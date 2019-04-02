import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/error.css';

class Error extends Component{
    componentWillUnmount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div className="container">
                <h2 className="text-center text-md-left">ERROR: NOT FOUND</h2>
                <p className="mt-4 mt-md-0">I'm sorry, but the page you've tried to reach does not exist.</p>
                <p className="mt-4">
                    <Link to="/">Please click here to return to the main page.</Link>
                </p>
            </div>
        )
    }
}

export default Error;
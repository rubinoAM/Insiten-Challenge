import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyLink extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <li className="py-3">
                <Link className="ml-4 text-white" to="/edit/:id">Company One</Link>
            </li>
        )
    }
}

export default CompanyLink;
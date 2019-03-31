import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/targetlist.css';

class TargetList extends Component{
    render(){
        return(
            <div className="target-list container bg-primary">
                <ul className="companies-list text-left">
                    <li className="py-3"><Link className="ml-4 text-white" to="/edit/:id">Company One</Link></li>
                    <li className="py-3"><Link className="ml-4 text-white" to="/edit/:id">Company Two</Link></li>
                    <li className="py-3"><Link className="ml-4 text-white" to="/edit/:id">Company Three</Link></li>
                    <li className="py-3"><Link className="ml-4 text-white" to="/edit/:id">Company Four</Link></li>
                </ul>
            </div>
        )
    }
}

export default TargetList;
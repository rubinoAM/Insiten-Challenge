import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyLink extends Component{
    render(){
        //console.log(this.props);
        return(
            <li className="py-3">
                <Link className="ml-4 text-white" to={`/edit/${this.props.data.id}`}>{this.props.data.name}</Link>
            </li>
        )
    }
}

export default CompanyLink;
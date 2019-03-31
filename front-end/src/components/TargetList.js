import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/targetlist.css';

//Utilities
import Companies from '../utilities/companies';
import CompanyLink from '../utilities/CompanyLink';

class TargetList extends Component{
    constructor(){
        super()
        this.state = {
            companies:Companies,
        }
    }

    render(){
        let companyArr = this.state.companies.map((company,i)=>{
            return <CompanyLink data={company} key={i}></CompanyLink>;
        })
        
        return(
            <div className="target-list container bg-primary">
                <ul className="companies-list text-left">
                    {companyArr}
                </ul>
            </div>
        )
    }
}

export default TargetList;
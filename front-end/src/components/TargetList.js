import React, { Component } from 'react';

class TargetList extends Component{
    render(){
        return(
            <div className="container">
                <ul>
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                    <li><a href="#">Four</a></li>
                </ul>
            </div>
        )
    }
}

export default TargetList;
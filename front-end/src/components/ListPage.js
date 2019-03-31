import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import AppHeader from './AppHeader';
import TargetList from './TargetList';

class ListPage extends Component{
    componentWillUnmount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div>
                <AppHeader></AppHeader>
                <div className="text-center my-5">
                    <TargetList></TargetList>
                    <div className="my-3">
                        <Link to="/add">Add Company</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListPage;
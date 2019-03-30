import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/main.css';

//Components
import AppHeader from './AppHeader';
import AppBody from './AppBody';

class Main extends Component {
    render(){
        return(
            <div className="main-app col-md-10">
                <Route path="/" component={AppHeader}/>
                <AppBody></AppBody>
            </div>
        )
    }
}

export default Main;
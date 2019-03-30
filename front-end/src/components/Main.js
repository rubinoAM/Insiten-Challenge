import React, { Component } from 'react';
import '../styles/main.css';

//Components
import AppHeader from './AppHeader';
import AppBody from './AppBody';

class Main extends Component {
    render(){
        return(
            <div className="main-app col-md-10">
                <AppHeader></AppHeader>
                <AppBody></AppBody>
            </div>
        )
    }
}

export default Main;
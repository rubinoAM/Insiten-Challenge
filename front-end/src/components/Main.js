import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/main.css';

//Components
import ListPage from './ListPage';
import AddPage from './AddPage';
import EditPage from './EditPage';

class Main extends Component {
    render(){
        return(
            <div className="main-app col-md-10">
                <Route exact path="/" component={ListPage}/>
                <Route exact path="/add" component={AddPage}/>
                <Route exact path="/edit/" component={EditPage}/>
            </div>
        )
    }
}

export default Main;
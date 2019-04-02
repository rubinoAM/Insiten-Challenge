import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/main.css';

//Components
import ListPage from './ListPage';
import AddPage from './AddPage';
import EditPage from './EditPage';
import Error from './Error';

class Main extends Component {
    render(){
        return(
            <div className="main-app col-md-10">
                <Switch>
                    <Route exact path="/" component={ListPage}/>
                    <Route exact path="/add" component={AddPage}/>
                    <Route exact path="/edit/:id" component={EditPage}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        )
    }
}

export default Main;
import React, { Component } from 'react';

//Components
import TargetList from './TargetList';

class AppBody extends Component{
    render(){
        return(
            <div className="text-center my-5">
                <TargetList></TargetList>
            </div>
        )
    }
}

export default AppBody;
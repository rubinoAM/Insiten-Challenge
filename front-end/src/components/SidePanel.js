import React from 'react';
import '../styles/sidepanel.css';

function SidePanel(){
    return(
        <div className="side-panel col-md-2 bg-primary">
            <ul className="my-3">
                <li className="pt-4"><a href="#">Option 1</a></li>
                <li className="pt-4"><a href="#">Option 2</a></li>
                <li className="pt-4"><a href="#">Option 3</a></li>
                <li className="pt-4"><a href="#">Option 4</a></li>
            </ul>
        </div>
    )
}

export default SidePanel;
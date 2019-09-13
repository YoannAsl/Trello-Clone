import React from "react";

const List = props => (
    <div className="ui card">
        <div className="content">
            <div className="header">Project Timeline</div>
        </div>

        <ul>
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
)
    

export default List;
import React from 'react' 

import './Cards.css'


const Card = (props) => {
    const classes = 'card' + props.className;
    return (
        <div className={classes}>
            {props.children}  {/* Children is the reserve name */}
        </div>
    )
}
export default Card;

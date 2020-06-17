import React from 'react';
import './Rectangle.css';

const Rectangle = (props) => {
    const style = {
        height: 10*props.val
    }
    return (
        <div className="Rectangle" style={style} val={props.val}>
            <label>{props.val}</label>
        </div>
    );
};

export default Rectangle;
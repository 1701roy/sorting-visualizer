import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label htmlFor="customInput">
                Custom Input: (Ex: 10,9,9,20) </label>
            <input 
                name="customInput" 
                id="customInput"  
                type="text" 
                onChange={props.change} />
        </div>
    );
};

export default UserInput;
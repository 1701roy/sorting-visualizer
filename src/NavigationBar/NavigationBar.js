import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
    const appName = {
        fontWeight: 'bold'
    }
    return (
        <div className="NavigationBar">
            <div className="ele"><p style={appName}>Sorting Visualizer</p></div>
            <div className="ele">
                <label htmlFor="algo">Algorithm: </label>
                <select 
                    name="algo" 
                    id="algo" 
                    onChange={props.algo} 
                    value={props.algoVal} 
                    disabled={props.canSort}>
                    <option value="0">Bubble Sort</option>
                    <option value="1">Insertion Sort</option>
                    <option value="2">Selection Sort</option>
                    <option value="3">Merge Sort</option>
                    <option value="4">Quick Sort</option>
                </select>
            </div>
            <button className="buttton" onClick={props.sort} disabled={props.canSort}>Sort</button>
            <div className="ele">
                <label>Speed: </label>
                <button className="buttton" onClick={props.slowDown}>Slow</button>
                <button className="buttton" onClick={props.speedUp}>Fast</button>
            </div>
        </div>
    );
};

export default NavigationBar;
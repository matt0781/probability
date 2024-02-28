import React, { useState, useContext, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { globalParametersContext } from '../../../App';   
import './../right.css'




const NPerClick = () => {
    const {nPerClick, setNPerClick, totalN, setTotalN} = useContext(globalParametersContext);

    const handleSelect = (eventKey) => {
        setNPerClick(eventKey);
    };

    const handleMoreSamples = () => {
        setTotalN(totalN + parseInt(nPerClick))
    };

    return (
        <div className="NPerClick-container">
            
            <div className="NPerClick-dropdown">
                <DropdownButton id="dropdown-basic-button" 
                    title={`N Per Click = ${nPerClick}`} onSelect={handleSelect} className="">
                <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                <Dropdown.Item eventKey={10}>10</Dropdown.Item>
                <Dropdown.Item eventKey={100}>100</Dropdown.Item>
                </DropdownButton>
             </div>

             <button className="more-samples-button" onClick={handleMoreSamples}>More Samples</button>
        </div>
    )
}

export default NPerClick
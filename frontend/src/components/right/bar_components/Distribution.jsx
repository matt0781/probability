import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Parameter from './Parameter';

//import './bar_components.css'

function Distribution() {
  const [selectedDistribution, setSelectedDistribution] = useState("Normal");
  const [para, setPara] = useState({mean: 0, sd: 1})

  const handleSelect = (eventKey) => {
    setSelectedDistribution(eventKey);
  };


  return (
    <div className="X-distribution">
        <div className="X-distribution-dropdown">
            <DropdownButton id="dropdown-basic-button" 
                title={selectedDistribution} onSelect={handleSelect} className="distribution">
            <Dropdown.Item eventKey="Normal">Normal</Dropdown.Item>
            <Dropdown.Item eventKey="Poisson">Poisson</Dropdown.Item>
            <Dropdown.Item eventKey="Bernoulli">Bernoulli</Dropdown.Item>
            </DropdownButton>
        </div>

        <Parameter selectedDistribution={selectedDistribution} />
        
    </div>
    );
}

export default React.memo(Distribution);
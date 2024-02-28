// Parameter.jsx
import React, { useState, useEffect, useContext } from 'react';
import { globalParametersContext } from '../../../App';   

function Parameter({ selectedDistribution }) {
  const [parameters, setParameters] = useState({mean:0,sd:1});
  const [paraAvailable, setParaAvailable] = useState(['mean', 'sd']);
  const {globalParameters, setGlobalParameters, setGlobalDistribution} = useContext(globalParametersContext);

  useEffect(() => {
    // Call the function corresponding to the current state
    switch (selectedDistribution) {
      case "Normal":
        setParaAvailable(["mean", "sd"]); setParameters({mean: 0, sd: 1}); break;
      case "Poisson":
        setParaAvailable(["mean"]); setParameters({mean: 1}); break;
      // Add more cases for additional states
      case "Bernoulli":
        setParaAvailable(["mean"]); setParameters({mean:0}); break;
      default:
        // Default action
        break;
    }

    console.log("selected distribution has changed")
  }, [selectedDistribution]); // Re-run the effect whenever the state changes

  useEffect(() => {
    console.log("parameters= ", parameters);
  }, [parameters])

  const handleParaChange = (event, para) => {
    const key = para;
    const value = parseInt(event.target.value);
    setParameters(prevParameters => ({
        ...prevParameters,
        [key]: value
      }));
  }

  const applyChangeGlobally = () => {
    setGlobalParameters(parameters);
    setGlobalDistribution(selectedDistribution);
  }

  return (
    <div className='X-distribution-parameters'>

        
        {paraAvailable.map(para => (
        <span style={{ marginRight: '10px', fontSize: '16px' }} key={para}>
          {para} = <input type="number" defaultValue={parameters[para]}  placeholder={parameters[para]} onChange={(e) => handleParaChange(e, para)} /> 
        </span>
      ))} 
       <button onClick={applyChangeGlobally}>Apply Change</button>

    </div>

  );
}

export default React.memo(Parameter);

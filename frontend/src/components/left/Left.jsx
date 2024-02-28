import React, { useContext} from 'react'
import './left.css';
import { globalParametersContext } from './../../App';   


const Left = () => {
  const {totalN} = useContext(globalParametersContext);
  return (
    <div className="left">
        <div className="left-title">Probability</div>
        <div className="left-tools">
          N = {totalN}
        </div>
        <div className="left-cartoon"></div>
    </div>
  )
}

export default Left
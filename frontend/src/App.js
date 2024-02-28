import logo from './logo.svg';
import './App.css';
import Left from './components/left/Left';
import Right from './components/right/Right';
import { GlobalProvider } from './'
import React,{ useState, createContext, useEffect} from 'react';


export const globalParametersContext = createContext({});

function App() {
  const [randomVariable, setRandomVariable] = useState('X');
  const [globalDistribution, setGlobalDistribution] = useState("Normal");
  const [globalParameters, setGlobalParameters] = useState({});
  const [nPerClick, setNPerClick] = useState(10);
  const [totalN, setTotalN] = useState(10)

  useEffect(() =>
    console.log("globalParamters= ", globalParameters)
  ,[globalParameters])
  useEffect(() =>
    console.log("nPerClick= ", nPerClick)
  ,[nPerClick])
  useEffect(() =>
    console.log("totalN= ", totalN)
  ,[totalN])
  useEffect(() =>
    console.log("globalDistribution= ", globalDistribution)
  ,[globalDistribution])

  return (
    <globalParametersContext.Provider value = {{ globalParameters, setGlobalParameters, nPerClick, setNPerClick, totalN, setTotalN, globalDistribution, setGlobalDistribution}}>
      <div className="App"> 
        <div className="left-container"><Left/></div>
        <div className="right-container"><Right/></div>
      </div>
    </globalParametersContext.Provider>
  );
}

export default React.memo(App);

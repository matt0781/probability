import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
//const d3 = require('d3-random');
import * as d3 from "d3"; // we will need d3.js
import { histogram  } from 'd3-array';
import Histogram from './Histogram';
import React,{ useState, useContext, useEffect, useRef} from 'react';
import { globalParametersContext } from '../../../App';   
import * as  histogramUtils from './histogram_utils.js';
//import RandomWalk from './RandomWalk';


function randomWalk(x_array, y_array, n){
    for (let i = 0; i < n; i++) {
        const value = Math.random() <= 0.5 ? 1 : -1;
        x_array.push(value);
        y_array.push(y_array[-1]+value)
    }

}

export const Graph = () => {
    const data = [1.5, 2, 2, 2.3, 2.4, 2.5,3, 3, 3, 4, 5, 5]; // n=12

    const {globalParameters, nPerClick, totalN, globalDistribution, setTotalN} = useContext(globalParametersContext);

    const [y_values, set_y_values] = useState(histogramUtils.y_values_func("Normal", globalParameters, 10)); // only for histogram y_values
    let [x_array, y_array] = [[],[]]

    console.log("I am from graph");
    
    //------------important bug
    // useEffect(()=>{
    //     set_y_values(prevYValues => [
    //         ...prevYValues,
    //         ...y_values_func("Normal", globalParameters, nPerClick)
    //     ]);
    //      console.log('hehehehehe');
    // },[totalN])

    const initialRender1 = useRef(true); // Ref to track initial render
    const initialRender2 = useRef(true); // Ref to track initial render
    
    useEffect(() => {
        // Check if it's not the initial render
        if (!initialRender1.current) {
            console.log('TotalN has changed:', totalN);
            if (globalDistribution!=="Bernoulli"){
                set_y_values(prevYValues => [
                    ...prevYValues,
                    ...histogramUtils.y_values_func(globalDistribution, globalParameters, nPerClick)
                ]);
                [x_array, y_array] = [[], []]
            } else if (globalDistribution === "Bernoulli"){
                randomWalk(x_array, y_array, nPerClick)
            }

        } else {
            // Set initial render to false after the first render
            initialRender1.current = false;
        }
    }, [totalN]); // Dependency array: useEffect runs when totalN changes

    useEffect(() => {
        // Check if it's not the initial render
        if (!initialRender2.current) {
            console.log('Global Distribution has changed:', totalN);
            if(globalDistribution!=="Bernoulli"){
                set_y_values(histogramUtils.y_values_func(globalDistribution, globalParameters, 10)); // n=0 if it is random walk
                setTotalN(10);
            }
            else if(globalDistribution==="Bernoulli"){
                setTotalN(0-nPerClick);
            }
        } else {
            // Set initial render to false after the first render
            initialRender2.current = false;
        }
    }, [globalDistribution]); // Dependency array: useEffect runs when totalN changes




    // if (globalDistribution == "Bernoulli"){
        
    //     return (
    //         <div className="graph">
    //            <RandomWalk x_array={x_array} y_array={y_array} xLabel={'Number of trials'} yLabel={'Score'}/>
    //         </div>
    //     )
    // }

    return (
        <div className="graph">
            <Histogram data={y_values} bins={histogramUtils.bins_func(globalDistribution, totalN)} xLabel={'x'} yLabel={'frequency'}/>
        </div>
    )
}



export default React.memo(Graph);

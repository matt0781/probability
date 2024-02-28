import React from 'react';
import './right.css';
import Distribution from './bar_components/Distribution';
import Graph from './graph_components/Graph';
import NPerClick from './graph_components/NPerClick';

const Right = () => {
  return (
    <div className="right">
        <div className="right-bar">
            <div className="X-distribution-container">
                <div className="X">X ~</div>
                <Distribution/>
            </div>
            <div className="X-click-container">
              <NPerClick/>
            </div>
        </div>
        <div className="right-graph-container">
            <Graph/>
        </div>
    </div>
  )
}


export default Right
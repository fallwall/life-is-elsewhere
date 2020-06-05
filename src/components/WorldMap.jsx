import React from 'react';
import MapChart_SA from './MapChart_SA';
import MapChart_EU from './MapChart_EU';

const WorldMap = () => {
  return (
    <div className="world-map">
      {/* <MapChart_SA /> */}
      <MapChart_EU />
    </div>
  )
}

export default WorldMap;

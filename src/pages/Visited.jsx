import React from 'react';
import Grid from '../components/Grid';
import Tile from '../components/Tile';
import data from '../data/cities.json';

const brakePoints = [500, 840, 1260];

const Visited = () => {
  return (
    <div className="visited-container">
      <div className="grid-container">
        <p>Tile of some sort.</p>
        <Grid brakePoints={brakePoints}>
          {data.visited.map(c => <Tile src={c.img} />)}
        </Grid>
      </div>
    </div>
  )
}

export default Visited;

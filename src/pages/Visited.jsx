import React from 'react';
import Grid from '../components/Grid';
import Tile from '../components/Tile';
import data from '../data/cities.json';

const brakePoints = [840, 1260];

const Visited = () => {
  return (
    <div className="visited-container">
      <div className="grid-container">
        <Grid brakePoints={brakePoints}>
          {data.visited.map(c => <Tile key={c.id} data={c} />)}
        </Grid>
      </div>
    </div>
  )
}

export default Visited;

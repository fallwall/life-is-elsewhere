import React, { useState } from 'react';

const Tile = ({ data }) => {
  const [reveal, setReveal] = useState(null);
  return (
    <div className="tile" onMouseOver={()=>setReveal(data.id)} onMouseLeave={()=>setReveal(null)}>
      <img src={data.img} alt="individual city" className={reveal === data.id? "img-blur":""}/>
      <div className={reveal === data.id? "centered":"hidden"}>
        <h2>{data.city}</h2>
        <p>{data.coordinates}</p>
      </div>
      <div className={reveal === data.id? "bottom-right":"hidden"}>
        <a href={data.url}>Read More >>></a>
      </div>
    </div>
  );
};

export default Tile;
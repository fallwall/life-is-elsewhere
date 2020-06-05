import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  {
    markerOffset: 15,
    name: "Quito",
    coordinates: [-78.4678, -0.1807]
  },
  {
    markerOffset: 15,
    name: "Lima",
    coordinates: [-77.0428, -12.0464]
  },
  {
    markerOffset: -30,
    name: "Cusco",
    coordinates: [-72.0094615,-13.5298426]
  },
  {
    markerOffset: 15,
    name: "Panama City",
    coordinates: [-79.5932, 9.0814]
  },
  {
    markerOffset: -30,
    name: "Belize City",
    coordinates: [-88.2295, 17.5057]
  },
  {
    markerOffset: 15,
    name: "San Salvador",
    coordinates: [-89.2503573,13.6915591]
  },
  {
    markerOffset: -30,
    name: "São Paulo",
    coordinates: [-46.9278, -23.5767]
  }
];

const MapChart_SA = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 350
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="grey"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "black" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart_SA;
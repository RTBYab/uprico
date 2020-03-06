import mapboxgl from "mapbox-gl";
import React, { useState, useEffect } from "react";

const Map = () => {
  const [mapData, setMapData] = useState({
    lng: 5,
    lat: 34,
    zoom: 2
  });
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapData.lng, mapData.lat],
      zoom: mapData.zoom
    });
  }, []);
  return <div></div>;
};

export default Map;

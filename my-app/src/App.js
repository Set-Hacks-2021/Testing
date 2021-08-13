import logo from './logo.svg';
import './App.css';
import React from 'react'

import MapSection from './Map.js' // import the map here


const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 


function App() {
  return (
    <MapSection location={location} zoomLevel={17} />
  );
}

export default App;

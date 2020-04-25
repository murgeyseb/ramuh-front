/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DroppingArea from './DroppingArea.js';
import GridMap from './GridMap.js';
import './App.css';

function App() {
  const [geojsonOverlay, setGeoJsonOverlay] = useState()
  const [geojsonLayerId, setGeoJsonLayerId] = useState()
  function handleDrop(files) {
    let data = new FormData();
    data.append('gridFile', files[0])
    fetch(process.env.REACT_APP_RAMUH_GRID_OVERLAY_PROVIDER_URL, {
      method: 'POST',
      body: data
    })
        .then(res => {
      return res.json()
    })
        .then(res => {
          setGeoJsonOverlay(res)
          setGeoJsonLayerId(uuidv4())
        })
  }
  
  function message(items) {
    if (items.length > 1) {
      return 'Please choose a single file'
    } else {
      return 'Drop your network file here'
    }
  }
  
  function isValid(items) {
    if (items.length > 1) {
      return false
    } else {
      return true
    }
  }
  return (
    <div className='App'>
      <DroppingArea handleDrop={handleDrop} message={message} isValid={isValid}>
        <GridMap id='mygridmap' geojsonLayerId={geojsonLayerId} geojsonOverlay={geojsonOverlay}/>
      </DroppingArea>
    </div>
  );
}

export default App;

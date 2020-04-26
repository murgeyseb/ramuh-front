/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

function GridMap(props) {
  function initialCenter() {
    var intialLat = process.env.REACT_APP_INITIAL_MAP_CENTER_LAT || 49.8
    var intialLng = process.env.REACT_APP_INITIAL_MAP_CENTER_LNG || 16.6
    return [intialLat, intialLng]
  }

  function initialZoom() {
    return process.env.REACT_APP_INITIAL_MAP_ZOOM || 4
  }
  
  return (
    <Map center={initialCenter()} zoom={initialZoom()}>
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        maxZoom='16'
      />
      <GeoJSON key={props.geojsonLayerId} data={props.geojsonOverlay}/>
    </Map>
  )
}

export default GridMap;

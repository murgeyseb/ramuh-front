/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import settings from './config.js'

function GridMap(props) {
  function initialCenter() {
    var initialLat = settings.INITIAL_MAP_CENTER_LAT
    var initialLng = settings.INITIAL_MAP_CENTER_LNG
    return [initialLat, initialLng]
  }

  function initialZoom() {
    return settings.INITIAL_MAP_ZOOM
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

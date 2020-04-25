/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import React from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'

function GridMap(props) {

  const position = [51.505, -0.09]
  return (
    <Map center={position} zoom={13}>
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
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'

type Props = {
    searchData: SearchData[],
}

const Map = ({ searchData }: Props) => {

    const coords = searchData.map(search => ({
        longitude: search.long,
        latitude: search.lat,
    }))
    let center: any = {}
    center = getCenter(coords)

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        longitude: center?.longitude,
        latitude: center?.latitude,
        zoom: 11,
    });

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/benoux/cl9k58fha002014p9io5e0syi'
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        onClick={(nextViewport: any = {}) => setViewport(nextViewport)}
        {...viewport}
    />
  )
}

export default Map
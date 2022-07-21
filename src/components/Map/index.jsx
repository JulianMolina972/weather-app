import React from 'react'
import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
export const Map = () => {
  return (
    <MapContainer center={[7.89391, -72.50782]} zoom={13} className="container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[7.89391, -72.50782]}>
      </Marker>
    </MapContainer>
  )
}

"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MapComponent({
  height,
  width,
  latitude,
  longitude,
}: {
  height: number;
  width: number | string;
  latitude: number;
  longitude: number;
}) {
  return (
    <div className="w-full">
      <MapContainer
        center={[latitude, longitude]}
        zoom={14}
        scrollWheelZoom={true}
        style={{
          height: height,
          width: width,
        }}
        className="z-10"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}

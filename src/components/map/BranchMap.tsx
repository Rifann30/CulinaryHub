import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function BranchMap() {
  const branches = [
    { id: 1, name: "Ember & Oak - Central", lat: -6.200, lng: 106.816, hours: "08:00 - 22:00" }
  ];

  return (
    <section className="py-12">
      <h2 className="font-playfair text-3xl mb-6">Branch Location</h2>
      <div style={{ height: 400 }}>
        <MapContainer center={[branches[0].lat, branches[0].lng]} zoom={13} style={{ height: "100%" }}>
          <TileLayer attribution="" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {branches.map(b => (
            <Marker key={b.id} position={[b.lat, b.lng]}>
              <Popup>
                <div className="font-semibold">{b.name}</div>
                <div className="text-sm">{b.hours}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}

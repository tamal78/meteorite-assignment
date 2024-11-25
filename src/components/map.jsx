import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [30, 30],
});

const InteractiveMap = () => {
  const navigate = useNavigate();

  const locations = [
    {
      id: "1",
      name: "norway",
      coords: [59.9139, 10.7522],
      details: "Explore the fjords.",
    },
    {
      id: "2",
      name: "denmark",
      coords: [55.6761, 12.5683],
      details: "Discover Copenhagen.",
    },
    {
      id: "3",
      name: "sweden",
      coords: [59.3293, 18.0686],
      details: "Visit Stockholm.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map</h2>
      <MapContainer
        center={[59.9139, 10.7522]}
        zoom={5}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coords}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                navigate(`/${location.name.toLowerCase()}`);
              },
            }}
          >
            <Tooltip>
              <div>
                <h3 className="font-bold">{location.name}</h3>
                <p className="text-sm text-gray-600">{location.details}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;

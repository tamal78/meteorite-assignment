import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const categoryIcons = {
  restaurant: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", // Restaurant icon
    iconSize: [30, 30],
  }),
  park: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3065/3065824.png", // Park icon
    iconSize: [30, 30],
  }),
  museum: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/1484/1484860.png", // Museum icon
    iconSize: [30, 30],
  }),
  hotel: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2645/2645882.png", // Hotel icon
    iconSize: [30, 30],
  }),
  shopping: new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png", // Shopping icon
    iconSize: [30, 30],
  }),
};

const PlacePage = () => {
  const { place } = useParams();

  const locations = {
    norway: {
      name: "Norway",
      coords: [59.9139, 10.7522],
      details: "Explore the beautiful fjords of Norway.",
      places: [
        {
          id: "1",
          name: "Fjord Restaurant",
          category: "restaurant",
          coords: [59.9171, 10.7589],
          imageUrl:
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/289019092.jpg?k=6be1a5bd8aedeede726867151f88807a801be5f0d58a75126d3809c331407368&o=",
        },
        {
          id: "2",
          name: "Nordic Park",
          category: "park",
          coords: [59.9213, 10.7507],
          imageUrl:
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/289019092.jpg?k=6be1a5bd8aedeede726867151f88807a801be5f0d58a75126d3809c331407368&o=",
        },
        {
          id: "3",
          name: "Viking Museum",
          category: "museum",
          coords: [59.9154, 10.7359],
          imageUrl:
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/289019092.jpg?k=6be1a5bd8aedeede726867151f88807a801be5f0d58a75126d3809c331407368&o=",
        },
        {
          id: "4",
          name: "Oslo Grand Hotel",
          category: "hotel",
          coords: [59.9101, 10.7457],
          imageUrl:
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/289019092.jpg?k=6be1a5bd8aedeede726867151f88807a801be5f0d58a75126d3809c331407368&o=",
        },
        {
          id: "5",
          name: "Scandi Shopping Mall",
          category: "shopping",
          coords: [59.9205, 10.7494],
          imageUrl:
            "https://q-xx.bstatic.com/xdata/images/hotel/max500/289019092.jpg?k=6be1a5bd8aedeede726867151f88807a801be5f0d58a75126d3809c331407368&o=",
        },
        {
          id: "6",
          name: "Aker Brygge",
          category: "restaurant",
          coords: [59.9094, 10.7282],
          imageUrl:
            "https://images.unsplash.com/photo-1596204975867-0cf5d426b1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        },
        {
          id: "7",
          name: "Royal Palace Gardens",
          category: "park",
          coords: [59.9169, 10.7276],
          imageUrl:
            "https://images.unsplash.com/photo-1598348818141-09d3cc0b44c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        },
        {
          id: "8",
          name: "Munch Museum",
          category: "museum",
          coords: [59.9095, 10.7605],
          imageUrl:
            "https://images.unsplash.com/photo-1519261302987-c34c31e81fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        },
      ],
    },
    denmark: {
      name: "Denmark",
      coords: [55.6761, 12.5683],
      details: "Enjoy the charm of Copenhagen.",
      places: [
        {
          id: "1",
          name: "Tivoli Gardens",
          category: "park",
          coords: [55.6737, 12.5681],
          imageUrl:
            "https://images.unsplash.com/photo-1602704762163-8d8128db0bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Tivoli Gardens Image
        },
        {
          id: "2",
          name: "Nyhavn",
          category: "restaurant",
          coords: [55.6802, 12.589],
          imageUrl:
            "https://images.unsplash.com/photo-1603647095540-b2f00b52d733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Nyhavn Image
        },
      ],
    },
    sweden: {
      name: "Sweden",
      coords: [59.3293, 18.0686],
      details: "Discover the vibrant city of Stockholm.",
      places: [
        {
          id: "1",
          name: "Gamla Stan",
          category: "museum",
          coords: [59.3251, 18.07],
          imageUrl:
            "https://images.unsplash.com/photo-1520948014847-5d9fe7c03a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Gamla Stan Image
        },
        {
          id: "2",
          name: "Stockholm Palace",
          category: "museum",
          coords: [59.3269, 18.0716],
          imageUrl:
            "https://images.unsplash.com/photo-1571065722417-0b66b0dc5db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Stockholm Palace Image
        },
      ],
    },
  };

  const location = locations[place];

  if (!location) {
    return (
      <div className="flex items-center justify-center h-screen">
        Place not found
      </div>
    );
  }

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <MapContainer
        center={location.coords}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={location.coords} icon={categoryIcons.restaurant}>
          <Tooltip>{location.name}</Tooltip>
        </Marker>
        {location.places.map((place) => (
          <Marker
            key={place.id}
            position={place.coords}
            icon={categoryIcons[place.category]}
          >
            <Tooltip>
              <div>
                <h3 className="font-bold">{place.name}</h3>
                <p className="text-sm text-gray-600">{place.category}</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute bottom-0 left-0 p-4 z-50">
        <Carousel>
          <CarouselContent className="flex justify-start gap-2">
            {location.places.map((place) => (
              <CarouselItem
                key={place?.id}
                className={`${
                  location.places.length <= 2 ? "basis-1/2" : "flex-[11.76%]"
                }`}
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-md p-2 w-44 hover:bg-cyan-50 transition-all duration-300">
                  <button
                    className="absolute top-1 right-1 bg-white rounded-full p-2 hover:bg-red-100"
                    aria-label="Favorite"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                  <img
                    src={place.imageUrl}
                    alt={place.name}
                    className="h-48 w-full rounded-t-lg object-cover"
                  />

                  <p className="mt-2 text-sm text-gray-900 px-2 font-semibold truncate">
                    {place.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default PlacePage;

import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from "../Navbar.jsx";

// Helper function to calculate distance between two coordinates using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Round to 2 decimal places
};

const NearbyHospitalLocator = () => {
    const [map, setMap] = useState(null);
    const [userLocationMarker, setUserLocationMarker] = useState(null);
    const [hospitalLayer, setHospitalLayer] = useState(null);
    const [hospitals, setHospitals] = useState([]); // Store hospitals for display
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [searchLocation, setSearchLocation] = useState(null); // Store search bar location coordinates

    const fetchCityName = async (location) => {
        const [lat, lon] = location;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        const data = await response.json();
        return data.address.city || data.address.town || data.address.village || 'Unknown location';
    };

    const initializeMap = async (location) => {
        const initialMap = L.map('fullMap').setView(location, 14); // Center map on user location

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(initialMap);

        setMap(initialMap);

        const cityName = await fetchCityName(location);

        const marker = L.marker(location).addTo(initialMap)
            .bindPopup(cityName) // Show city name
            .openPopup();

        setUserLocationMarker(marker);
        await findNearbyHospitals(location);
        setInputValue(cityName);
        setLoading(false);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = [position.coords.latitude, position.coords.longitude];
                initializeMap(userLocation);
            }, (error) => {
                console.error("Error getting location: ", error);
                setLoading(false);
            });
        }
    }, []);

    const findNearbyHospitals = (location) => {
        const [lat, lon] = location;
        const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${lat},${lon})[amenity=hospital];out;`;

        fetch(overpassUrl)
            .then(response => response.json())
            .then(data => {
                if (hospitalLayer) {
                    map.removeLayer(hospitalLayer);
                }

                const hospitalMarkers = data.elements.map(hospital => {
                    return L.marker([hospital.lat, hospital.lon])
                        .bindPopup(hospital.tags.name || 'Unknown Hospital');
                });

                const layerGroup = L.layerGroup(hospitalMarkers).addTo(map);
                setHospitalLayer(layerGroup);
                setHospitals(data.elements.slice(0, 10)); // Show only 10 nearest hospitals
            });
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setInputValue(query);

        if (query.length >= 3) {
            fetch(`https://photon.komoot.io/api/?q=${query}&limit=5`)
                .then(response => response.json())
                .then(data => {
                    const newSuggestions = data.features.map(feature => ({
                        name: feature.properties.name,
                        coordinates: [feature.geometry.coordinates[1], feature.geometry.coordinates[0]],
                    }));
                    setSuggestions(newSuggestions);
                });
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (location, name) => {
        setSearchLocation(location); // Set the search location coordinates
        map.setView(location, 14);
        findNearbyHospitals(location);
        setSuggestions([]);
        setInputValue(name);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const query = inputValue.trim();
            if (query.length > 0) {
                fetch(`https://photon.komoot.io/api/?q=${query}&limit=5`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.features.length > 0) {
                            const location = [
                                data.features[0].geometry.coordinates[1],
                                data.features[0].geometry.coordinates[0],
                            ];
                            setSearchLocation(location); // Set the search location coordinates
                            map.setView(location, 14);
                            findNearbyHospitals(location);
                        }
                    });
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="relative h-screen" lang="en">
                <div id="fullMap" className="fixed top-0 left-0 w-full h-full border border-gray-300"></div>

                {loading && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-2xl z-50">
                        Loading nearby hospitals...
                    </div>
                )}

                <div className="absolute top-28 left-4 right-4 md:left-10 md:right-auto z-50 w-full md:w-1/3 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg">
                    <div className="z-50 w-full">
                        <input
                            type="text"
                            placeholder="Search for a location"
                            className="w-full p-2 border border-gray-300 rounded-lg shadow-lg"
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            autoComplete="off"
                        />
                        {suggestions.length > 0 && (
                            <div className="absolute bg-white border border-gray-300 z-10 w-full max-h-48 overflow-y-auto">
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="p-2 cursor-pointer hover:bg-gray-200"
                                        onClick={() => handleSuggestionClick(suggestion.coordinates, suggestion.name)}
                                    >
                                        {suggestion.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mt-4 max-h-80 overflow-y-auto">
                        {hospitals.slice(0, 10).map((hospital, index) => {
                            const distance = searchLocation
                                ? calculateDistance(searchLocation[0], searchLocation[1], hospital.lat, hospital.lon)
                                : 'N/A';

                            return (
                                <div key={index} className="p-2 border border-gray-300 rounded-lg mb-2">
                                    <h3 className="font-bold">{hospital.tags.name || 'Unknown Hospital'}</h3>
                                    <p>Distance: {distance} km</p> {/* Show distance instead of coordinates */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NearbyHospitalLocator;

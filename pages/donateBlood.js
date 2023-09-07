import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import the Mapbox GL JS CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJhdmluZGNoYXJ5IiwiYSI6ImNsbTgxcXZ3YTA3czEzZHJybXN5d3N4MXgifQ.ixknx392VRyiso3Reh9EEQ'

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJhdmluZGNoYXJ5IiwiYSI6ImNsbTgxcXZ3YTA3czEzZHJybXN5d3N4MXgifQ.ixknx392VRyiso3Reh9EEQ'; // Replace with your Mapbox access token

const DonateBlood = () => {
    const [bloodBanks, setBloodBanks] = useState([]);
    const [selectedBloodBank, setSelectedBloodBank] = useState(null);

    useEffect(() => {
        // Initialize Mapbox GL JS map
        const map = new mapboxgl.Map({
            container: 'map', // Replace 'map' with the ID of your map container
            style: 'mapbox://styles/mapbox/streets-v11', // Replace with your map style
            center: [0, 0], // Initial center coordinates
            zoom: 10, // Initial zoom level
        });

        // Get user's location using the Geolocation API
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;

                // Send user's location to the server via an API request
                axios
                    .post('/rakadata/bloodBanks', {
                        latitude: userLatitude,
                        longitude: userLongitude,
                    })
                    .then((response) => {
                        const nearbyBloodBanks = response.data;

                        // Use Mapbox GL JS to display the blood banks on the map
                        nearbyBloodBanks.forEach((bloodBank) => {
                            new mapboxgl.Marker()
                                .setLngLat([bloodBank.longitude, bloodBank.latitude])
                                .addTo(map);
                        });

                        // Update the state with nearby blood banks
                        setBloodBanks(nearbyBloodBanks);
                    })
                    .catch((error) => {
                        console.error('Error fetching nearby blood banks:', error);
                    });
            },
            (error) => {
                console.error('Error getting location:', error);
            }
        );
    }, []); // Empty dependency array means this effect runs once, like componentDidMount

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '500px' }}></div>
            <Map
                initialViewState={{
                    latitude: 37.8,
                    longitude: -122.4,
                    zoom: 14
                }}
                style={{width: 800, height: 600}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <Marker longitude={-122.4} latitude={37.8} color="red" />
            </Map>
        </div>
    );
};

export default DonateBlood;

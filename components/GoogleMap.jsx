'use client';
import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '10px'
  };
  const initialCenter = {
    lat: -37.8164587517212,
    lng: 144.96881251606567
  };
export function GoogleMaps(props) {
    const [center, setCenter] = useState(initialCenter);
    const mapRef = useRef(null);
    const isLoaded = useRef(false);
  
    useEffect(() => {
      if (isLoaded.current && mapRef.current) {
        const listener = mapRef.current.addListener('center_changed', () => {
          const newCenter = mapRef.current.getCenter();
          setCenter({
            lat: newCenter.lat(),
            lng: newCenter.lng(),
          });
        });
  
        return () => {
          listener.remove();
        };
      }
    }, []);
  
    const handleLoad = (map) => {
      mapRef.current = map;
      isLoaded.current = true;
    };
  
    return (
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={handleLoad}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
}

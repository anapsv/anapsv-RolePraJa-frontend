import React, { useEffect, useRef, useCallback, useState } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import Spinner from '../shared/Spinner';
import PlacesList from './PlacesList';
import styled from 'styled-components';
import '../assets/map.css';
import { getPlacesData } from '../services/placesService';
// import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from 'use-places-autocomplete';

const libraries = ['places'];

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

export default function MyComponent({ setCoordinates, setBounds, coordinates }) {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlacesData()
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPlaces(JSON.stringify(response.data));
            })
    }, []);

    const { isLoaded, loadError } = useLoadScript({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAIi1qk9xRdgBS1lV5Ju-O1tEnDfBz9Vjg&libraries=places',
        googleMapsApiKey: "AIzaSyAIi1qk9xRdgBS1lV5Ju-O1tEnDfBz9Vjg",
        libraries,
    });

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) =>
        mapRef.current.panTo({ lat, lng })
    );

    if (loadError) return "Error loading map";

    if (!isLoaded) return <Spinner />

    return (
        <>
            <PlacesList />
            <Icon src={ require("../assets/logoRolePraJa.png") } ></Icon>
            <Location><Locate panTo={ panTo } /></Location>
            <GoogleMap
                mapContainerClassName='map-container'
                // mapContainerStyle={ mapContainerStyle }
                zoom={ 14 }
                center={ coordinates }
                options={ options }
                isLoaded={ isLoaded }
                onClick={ (e) => {
                    console.log(e);
                } }
                onLoad={ onMapLoad }
                onChange={ (e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                } }
            >
                {
                    // ...Your map components
                }
            </GoogleMap>
        </>
    )
}

function Locate({ panTo }) {
    return <button onClick={ () => {
        navigator.geolocation.getCurrentPosition((position) => {
            panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        }, () => null);
    } }>LOC ATUAL</button>
}

const Icon = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 4%;
    left: 40%;
    z-index: 3;
`
const Location = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 4%;
    right: 2%;
    z-index: 3;
`
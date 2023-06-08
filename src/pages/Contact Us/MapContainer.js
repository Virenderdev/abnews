import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '100%',
    height: '400px',
 
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 37.7749,
        lng: -122.4194, 
      }}
    >
      <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCKvc-fNI8-a2s_2-ITV9e346aVuDJg9x0', 
})(MapContainer);

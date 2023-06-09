import React, { useState } from "react";
import { Button, Form, Popover } from "react-bootstrap";
import GoogleMap from "react-google-maps/lib/components/GoogleMap";

const MapContainer = ({ address }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mapCenter, setMapCenter] = useState('');

  const handleSearch = () => {
    if (!searchQuery) return;

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchQuery }, (results, status) => {
      if (status === "OK" && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setMapCenter({ lat: lat, lng: lng });
      }
    });
  };

  return (
    <Popover id="popover-card">
      <Popover.Content>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <GoogleMap
              center={{ lat: 0, lng: 0 }} 
              zoom={15} 
              style={{ width: "100%", height: "200px" }} 
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSearch} disabled={!searchQuery}>
            New Places Nearby
          </Button>
        </Form>
      </Popover.Content>
    </Popover>
  );
};

export default MapContainer;

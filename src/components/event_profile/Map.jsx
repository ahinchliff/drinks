import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

function Map(props) {
  const { latitude, longitude } = props.location;  
  return (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: latitude, lng: longitude }}>
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));

import React from 'react';
import Map from './Map';

function MapArea(props) {
  return (
    <div>
      <span style={{fontFamily: '"Helvetica", sans-serif', fontSize: '18px'}}>Location</span>
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_5FdODt2U1KVnKhawWlk1fAUPFiI4rBE&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px`, marginTop: '10px' }} />}
        mapElement={<div style={{ height: `100%` }} />}
        location={props.location}
      />
    </div>
  );
}

export default MapArea;



import React from 'react';
import styled from 'styled-components';
import Map from './Map';

function MapArea(props) {
  return (
    <div>
      <Title>Location</Title>
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

const Title = styled.span`
  font-family: "Helvetica", sans-serif;
  font-size: 18px;
`;


export default MapArea;



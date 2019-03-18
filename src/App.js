import React, { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from "./Map";
import "./App.css";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMapClicked(mapProps, map, coord) {
    const { latLng } = coord;
    const markersCopy = this.state.markers.slice(0);
    const newMarker = {
      position: {
        lat: latLng.lat(),
        lng: latLng.lng()
      }
    };
    markersCopy.push(newMarker);
    console.log(markersCopy);
    this.setState({
      markers: markersCopy
    });
  }

  render() {
    return (
      <Map google={this.props.google} onClick={this.onMapClicked} zoom={14}>
        {this.state.markers.map(marker => {
          return <Marker position={marker.position} />;
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvtForlDhB2fNwIlom0rQk_TBRI0TrGx0"
})(MapContainer);

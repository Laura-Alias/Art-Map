import React, { Component } from "react";
import { GoogleApiWrapper, Map, InfoWindow, Marker } from "google-maps-react";
import "./App.css";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      showingInfoWindow: false,
      activeMarker: null,
      selectedPlace: null,
      currentLocation: {
        lat: 53.35014,
        lng: -6.266155
      }
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
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
    this.setState({
      markers: markersCopy
    });
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      placeName: props.name,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        },
        err => console.log("error with geo location", err)
      );
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={14}
        initialCenter={this.state.currentLocation}
      >
        {/* This marker is for the current location */}
        <Marker
          onClick={this.onMarkerClick}
          position={this.state.currentLocation}
          name="Current Location"
        />
        {/* These are the markers we add when we click on the map*/}
        {this.state.markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              onClick={this.onMarkerClick}
              position={marker.position}
            />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.placeName ? this.state.placeName : ""}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvtForlDhB2fNwIlom0rQk_TBRI0TrGx0"
})(MapContainer);

import React, { Component } from "react";
import Map from "./Map";
import Form from "./Form";

export default class MapWithForm extends Component {
  state = {
    markers: [],
    selectedLocation: { latitude: "", longitude: "" },
    name: ""
  };

  setMarkers = () => {
    const { selectedLocation, name } = this.state;
    const markersCopy = this.state.markers.slice(0);
    const marker = {
      position: selectedLocation,
      name
    };
    markersCopy.push(marker);
    this.setState({ markers: markersCopy });
  };

  setSelectedLocation = location => {
    this.setState({ selectedLocation: location });
  };

  onNameChange = ({ target }) => {
    this.setState({ name: target.value });
  };

  render() {
    const { markers, selectedLocation } = this.state;
    return (
      <>
        <Map markers={markers} onMapClicked={this.setSelectedLocation} />
        <Form
          selectedLocation={selectedLocation}
          onSubmit={this.setMarkers}
          onNameChange={this.onNameChange}
        />
      </>
    );
  }
}
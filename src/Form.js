import React from "react";
import "./App.css";

export default props => {
  const doSubmit = e => {
    console.log(e);
    e.preventDefault();
    props.onSubmit();
  };

  const { latitude, longitude } = props.selectedLocation;

  return (
    <div>
      <h3>New Graffiti</h3>
      <form onSubmit={doSubmit}>
        <div className="form-group">
          <label htmlFor="nameImput">Name</label>
          <input
            type="text"
            name="name"
            value={props.name}
            placeholder="Name"
            onInput={props.onNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="latitudeImput">Latitude</label>
          <input readOnly type="text" value={latitude} />
        </div>
        <div className="form-group">
          <label htmlFor="longitudeImput">Longitude</label>
          <input readOnly type="text" value={longitude} />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
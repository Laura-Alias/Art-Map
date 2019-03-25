import React from "react";
import "./App.css";


class Form extends React.Component {
    constructor() {
      super()
  
      this.state = {
        name: '',
        latitude: '',
        longitude: '',
      }
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getMyLocation = this.getMyLocation.bind(this)
    }
    
    componentDidMount() {
      this.getMyLocation()
    }
  
    getMyLocation() {
      const location = window.navigator && window.navigator.geolocation
      
      if (location) {
        location.getCurrentPosition((position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        }, (error) => {
          this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
        })
      }

    

    }
  
    render() {
      const { latitude, longitude } = this.state
      
      return (
        <div>
          <h3>New Graffiti</h3>
          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
             <label for="nameImput">Name</label>
             <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <label for="latitudeImput">Latitude</label>
                <input type="text" value={latitude} />
            </div>
            <div className="form-group">
                <label for="longitudeImput">Longitude</label>
                <input type="text" value={longitude} />
          </div>
          <input type="submit" value="submit" />
          </form>
        </div>
      )
    }
  }

export default Form


import React from "react";
import axios from "axios";

export default () => {
    const config = {
        headers: {
          "X-RapidAPI-Key": "b5c4ca3126msh35999cb5da09132p15535bjsnb9b3b2c7fb56",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
      const url = "https://GooglePlacesdimasV1.p.rapidapi.com/addPlace"
      const data = {
        apiKey: "AIzaSyAvtForlDhB2fNwIlom0rQk_TBRI0TrGx0"
      }
    axios.post(url, data,config)

    return (<div>test</div>)
}

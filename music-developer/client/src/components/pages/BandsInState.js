
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function BandsInStatePage()  {
  const [state, setState] = useState(null);
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      
      // Convert coordinates to state using Google's Geocoding API
      try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API }`);
        const addressComponents = response.data.results[0].address_components;
        const stateObj = addressComponents.find(component => component.types.includes('administrative_area_level_1'));
        const userState = stateObj.long_name;
        
        setState(userState);

        // Query your database for bands in the state
        const bandsResponse = await axios.get(`/api/bands?state=${userState}`);
        setBands(bandsResponse.data);
      } catch (error) {
        console.error('Error getting state:', error);
      } finally {
        setLoading(false);
      }
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Bands in {state}</h1>
          <ul>
            {bands.map(band => (
              <li key={band.id}>{band.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
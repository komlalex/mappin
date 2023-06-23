import {useState} from "react";
import Map, {Marker} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
function App() {
  const [viewstate, setViewstate] = useState({
    latitude: 48,
      longitude: 17,     
      zoom: 4
  }) 

  return (
    <Map 
    {...viewstate}
    onMove={evt => setViewstate(evt.viewState)}
    style={{width: 800, height: 600}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken= {process.env.REACT_APP_MAPBOX}  
    >
      <Marker latitude={48.858093} longitude={2.294694} color="red" />
    </Map>
  )
}

export default App
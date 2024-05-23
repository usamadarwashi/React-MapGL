import './App.css'
import MapGL from 'react-map-gl';

function App() {
    return (
        <>
            <MapGL
                mapboxAccessToken={"pk.eyJ1IjoidGhhbWlyLWFsaGFydGh5IiwiYSI6ImNsZnRsa3Q4MjAwdXczbnMxaDlycnRvbTAifQ.JyDqUC2S2D2-f0YJUmMxaw"}
                initialViewState={{
                    longitude: 54.4651,
                    latitude: 21.6160,
                    zoom: 5
                }}
                style={{width: '100vw', height: '100vh'}}
                mapStyle="mapbox://styles/mapbox/light-v11"
            />
        </>
    )
}
export default App;
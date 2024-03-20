import './App.css'
import MapGL from 'react-map-gl';

function App() {
    return (
        <>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                zIndex: 1,
                padding: '10px',
                borderRadius: '8px',
                margin: '10px',
                maxWidth: '250px',
                textAlign: 'center',
            }}>
                <h1>Oman</h1>
                <p>سلام عليكوووم</p>

            </div>
            {/*<Usama></Usama>*/}
            {/*<button onClick={toggleTable}>Toggle Table</button>*/}
            {/*{*/}
            {/*    count && <Table></Table>*/}
            {/*}*/}
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
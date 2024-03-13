import './App.css'
// import Usama from "./components/usama.tsx";
// import Table from "./components/table.tsx";
// import {useState} from "react";
import Map from 'react-map-gl';
function App() {
  // const [count,setCount] = useState(false)

    // function toggleTable() {
    //     if (count) setCount(false)
    //     else setCount(true)
    // }
    return (
    <>
        {/*<Usama></Usama>*/}
        {/*<button onClick={toggleTable}>Toggle Table</button>*/}
        {/*{*/}
        {/*    count && <Table></Table>*/}
        {/*}*/}
        <Map
            mapboxAccessToken={"pk.eyJ1IjoidGhhbWlyLWFsaGFydGh5IiwiYSI6ImNsZnRsa3Q4MjAwdXczbnMxaDlycnRvbTAifQ.JyDqUC2S2D2-f0YJUmMxaw"}
            initialViewState={{
                longitude: 54.4651,
                latitude: 21.6160,
                zoom: 5
            }}
            style={{width: '100vw', height: '100vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    </>
  )
}

export default App

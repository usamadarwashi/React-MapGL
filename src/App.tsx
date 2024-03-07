import './App.css'
import Usama from "./components/usama.tsx";
import Table from "./components/table.tsx";
import {useState} from "react";

function App() {
  const [count,setCount] = useState(false)

    function toggleTable() {
        if (count) setCount(false)
        else setCount(true)
    }

    return (
    <>
        <Usama></Usama>
        <button onClick={toggleTable}>Toggle Table</button>
        {
            count && <Table></Table>
        }
    </>
  )
}

export default App

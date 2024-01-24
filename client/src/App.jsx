import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './layout/Pages/Home'
import Add from "./layout/Pages/Add";
import "./reset.scss"

function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Add" element={<Add/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

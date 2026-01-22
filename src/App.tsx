import Home from "./components/Home"
import Position from "./components/Position"
import {Route, Routes } from "react-router-dom"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/position" element={<Position />} />
      </Routes>

  )
}

export default App

import "./App.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
  <div className="App">
    <Navbar/>
    <h1>Pranav</h1>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes> */}
  </div>
  )
}
export default App;
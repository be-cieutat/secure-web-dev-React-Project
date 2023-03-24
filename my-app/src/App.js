import React from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Locations from "./pages/Locations";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} >
          <Route path="/login/register" element={<Register />} />
        </Route>
        <Route path={"/"} element={<Locations/>}/>
      </Routes>
    </div>
  );
}

export default App;

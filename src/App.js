// 
import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Components/Home";

import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
     </BrowserRouter>
      </>
  );
}

export default App;


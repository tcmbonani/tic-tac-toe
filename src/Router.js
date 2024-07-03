import React, { useContext } from "react";
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";


function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/game-on" element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;

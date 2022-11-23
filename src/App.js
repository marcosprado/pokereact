import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Pokemon from "./components/pages/Pokemon";

import "./css/global.css";
import "./css/types.css";
import "./css/pokedex.css";
import "./css/pokemon.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:pokemonId" element={<Pokemon />} />
        {/*
         */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

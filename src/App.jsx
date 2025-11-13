import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Header from "./components/Header";
import { FilterProvider } from "./context/FilterContext";

export default function App() {
  const [nombre, setNombre] = useState("");
  return (
    <FilterProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
      </Routes>
    </FilterProvider>
  );
}

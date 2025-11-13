import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useFilters } from "../context/FilterContext";

export default function Header() {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    clearFilters,
  } = useFilters();
  const location = useLocation();
  const isCharactersPage = location.pathname === "/Characters";

  return (
    <>
      <header className="bg-black text-yellow-500 font-bold p-4">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hover:bg-yellow-500 hover:text-black p-2 rounded-md"
            >
              HOME
            </Link>
            <Link
              to="/Characters"
              className="hover:bg-yellow-500 hover:text-black p-2 rounded-md"
            >
              PERSONAJES
            </Link>
          </div>

          {isCharactersPage && (
            <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar personaje..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-64"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-md bg-gray-800 text-white border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-auto"
              >
                <option value="all">Todas las razas</option>
                <option value="Human">Humano</option>
                <option value="Demon">Demonio</option>
              </select>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 rounded-md bg-yellow-500 text-black hover:bg-yellow-400 transition-colors w-full md:w-auto"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

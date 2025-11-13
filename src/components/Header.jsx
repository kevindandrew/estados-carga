import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="bg-black text-yellow-500 font-bold p-4">
        <nav className="flex items-center justify-center gap-4">
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
        </nav>
      </header>
    </>
  );
}

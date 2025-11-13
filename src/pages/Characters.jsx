import React, { useEffect, useState } from "react";
import Load from "../components/Load";
import { useFetch } from "../hooks/useFetch";
export default function Characters() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `https://www.demonslayer-api.com/api/v1/characters?limit=6&page=${page}`
  );
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <Load i={i} />
        ))}
      </div>
    );
  }
  if (error) {
    return <p>error:{error}</p>;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {data.map((personaje) => (
          <div
            key={personaje.id}
            className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
          >
            <a href="#">
              <img className="rounded-base" src={personaje.img} alt="" />
            </a>
            <a href="#">
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                {personaje.name}
              </h5>
            </a>
            <p className="mb-6 text-body">{personaje.description}</p>
            <a
              href="#"
              className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Read more
              <svg
                className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
      <div className=" w-full flex items-center justify-between px-8">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
          className="bg-green-700 text-white p-4 rounded-2xl"
        >
          anterior
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="bg-green-700 text-white p-4 rounded-2xl"
        >
          siguiente
        </button>
      </div>
    </>
  );
}

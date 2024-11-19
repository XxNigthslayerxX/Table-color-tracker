"use client";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [conteo, setConteo] = useState(() => {
    // Cargar datos de localStorage al iniciar
    const savedData = localStorage.getItem("conteoColores");
    return savedData ? JSON.parse(savedData) : { rojo: 0, verde: 0, azul: 0 };
  });

  useEffect(() => {
    // Guardar los datos en localStorage cuando cambien
    localStorage.setItem("conteoColores", JSON.stringify(conteo));
  }, [conteo]);

  const contarColores = () => {
    const celdas = document.querySelectorAll("input");
    const nuevoConteo = { rojo: 0, verde: 0, azul: 0 };

    celdas.forEach((celda) => {
      const texto = celda.value.trim().toLowerCase();
      if (texto === "rojo") nuevoConteo.rojo++;
      if (texto === "verde") nuevoConteo.verde++;
      if (texto === "azul") nuevoConteo.azul++;
    });

    setConteo(nuevoConteo);
  };

  return (
    <div>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: 25 }, (_, index) => (
          <div key={index}>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={contarColores}
      >
        Guardar
      </button>
      <div className="mt-4">
        <p>
          Rojo: <span>{conteo.rojo}</span>
        </p>
        <p>
          Verde: <span>{conteo.verde}</span>
        </p>
        <p>
          Azul: <span>{conteo.azul}</span>
        </p>
      </div>
    </div>
  );
};

export default Table;

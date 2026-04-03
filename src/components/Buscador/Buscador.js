import React from "react";

function Buscador() {
  return (
    <form className="search-form" action="results.html" method="get">
      <input type="text" name="searchData" placeholder="Buscar..." />
      <button type="submit" className="btn btn-success btn-sm">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
import React from "react";
import "./style.css";
// <nav className="navbar navbar-expand-lg navbar-primary bg-primary">

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-primary navbar-custom">
      <a className="navbar-brand" href="/">
        <h2 className="text-black"> Busqueda de Libros en Google </h2>{" "}
      </a>{" "}
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" id="home">
            <a className="nav-link" href="/">
              {" "}
              <button type="button" className="btn btn-info text-white">
                {" "}
                Busca Libros{" "}
              </button>
            </a>
          </li>{" "}
          <li className="nav-item" id="report">
            <a className="nav-link" href="/saved">
              {" "}
              <button type="button" className="btn btn-warning text-white">
                {" "}
                Libros Guardados{" "}
              </button>
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
}

export default Nav;

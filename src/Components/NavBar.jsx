import React from "react";
import "../Styles/NavBar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
/* const AdminLink = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/pages/PagAdmin")}
      className="dropdown-item"
    >
      {" "}
      Admin{" "}
    </button>
  );
}; */
export const NavBar = () => {
  /* const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/pages/PagAdmin");
  }; */
  return (
    <>
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <NavLink to="/Noticias" className="nav-link">
            Noticias
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Eventos" className="nav-link">
            Eventos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Cursos" className="nav-link">
            Cursos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="Recursos" className="nav-link">
            Recursos
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="SapereAude" className="nav-link">
            Sapere Aude
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Iniciar Sesión
          </a>

          <ul className="dropdown-menu">
            <li>
              <NavLink to="Estudiantes" className="dropdown-item">
                Estudiantes
              </NavLink>
            </li>
            <li>
              <NavLink to="Profesores" className="dropdown-item" href="#">
                Profesores
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            {/* <li>
              <NavLink to="Admin" className="dropdown-item">
                Admin
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/PagAdmin" className="dropdown-item">
                Admin
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </>
  );
};

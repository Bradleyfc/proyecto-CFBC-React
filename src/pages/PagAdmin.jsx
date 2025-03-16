import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PagAdmin.css";
import Button from "react-bootstrap/Button";



export const PagAdmin = () => {
  return (

    <>
    <div className="list-group">
      <Link
        to="/NoticiasForm"
        className="list-group-item list-group-item-action   "
        //aria-current="true"
      >
        Edición de Noticias
      </Link>
      <Link to="/EventosForm" className="list-group-item list-group-item-action">
        Edición de Eventos
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column"
      >
        Edición de Cursos
      </Link>
      <Link to="#" className="list-group-item list-group-item-action">
        Edición de Recursos
      </Link>
      <Link
        className="list-group-item list-group-item-action "
        //aria-disabled="true"
      >
        Edición de Sapere Aude
      </Link>
    </div>


<div className="text-end"> 
<Link to="/">
  <Button variant="secondary" type="button" className="button">
    Ir a Inicio
  </Button>
</Link>
</div>

</>
    
  );
};





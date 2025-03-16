import React from "react";

import "../Styles/NoticiasForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export const NoticiasForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="Form.BasicText">
        <Form.Label>Título de la Noticia</Form.Label>
        <Form.Control type="text" placeholder="Escriba el título aquí" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Form.ControlTextArea1">
        <Form.Label>Texto de la Noticia</Form.Label>

        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Escriba el texto aquí "
        />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="Form.BasicDate">
        <Form.Label>Introduzca la Fecha</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <br></br>

    
<Form.Group>
  <Form.Label className="d-block text-center">Escoja una Imagen</Form.Label>
  <br></br>
  <InputGroup className="mb">
    <div className="custom-file-input-container">
      
      <input
        type="file"
        id="customFileInput"
        className="custom-file-input"
        onChange={(e) => {
        // cambiando el nombre cuando se selecciona un archivo
          const fileName = e.target.files[0]?.name || "Ningún archivo seleccionado";
          document.getElementById("fileNameLabel").textContent = fileName;
        }}
        
        style={{ display: 'none' }} //ocultando el nombre original del cuadro de insercion de imagen
      />
      <div className="custom-file-input-ui">
        <span id="fileNameLabel">Ningún archivo seleccionado</span>
        <label htmlFor="customFileInput" className="btn btn-outline-secondary">
          Examinar
        </label>
      </div>
    </div>
    <Button variant="outline-secondary">
      Agregar
    </Button>
  </InputGroup>
</Form.Group>
<br></br>

 <div className="text-center"> 
 {/* poner el texto al final */}
{/* <div className="text-end"> */} 
      <Button variant="primary" type="submit" className="button-center"> 
        Enviar
      </Button>
      </div>
     {/*  <div className="text-end"> 
      <Button variant="secondary" type="button" className="button-end"> 
       
    
      <Link to="/PagAdmin" >
        
      </Link>
      Cancelar
      </Button>
      </div> */}

<div className="text-end"> 
        <Link to="/PagAdmin">
          <Button variant="secondary" type="button" className="button-end">
            Cancelar
          </Button>
        </Link>
      </div>
    </Form>
  );
};

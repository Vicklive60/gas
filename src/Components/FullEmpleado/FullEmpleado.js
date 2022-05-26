import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./FullEmpleado.module.css";

var FullEmpleado = (props) => {
  var postIndex = props.match.params.postIndex;
  var openEmpleado = props.openEmpleado(postIndex);

  return openEmpleado ? (
    <div
      className={classes["full-post"]}
    >
      <h1>Nombre del empleado</h1>
      <h2>{openEmpleado.nombre} {openEmpleado.apellido}</h2>
      <h3>Correo electronico</h3>
      <p>{openEmpleado.email}</p>
      <h3>Documnto de identidad</h3>
      <p>{openEmpleado.documento}</p>
      <h3>Contraseña</h3>
      <p>{openEmpleado.contrasena}</p>
      <p hidden>{openEmpleado.id}</p>
      <button className={classes["cancel-button"]}><a onClick={() => props.removeEmpleado(openEmpleado.id)}>Eliminar</a></button>
    </div>
  ) : null;
};

export default withRouter(FullEmpleado);

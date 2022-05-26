import React from "react";

import classes from "./NewEmpleado.module.css";

var NewEmpleado = (props) => {
  return (
    <table className={classes["new-empleado-form"]}>
      <tbody>
        <tr>
          <td>
            <label>Nombre</label>
          </td>
          <td>
            <input
              type="text"
              value={props.NewEmpleadoInfo["nombre"]}
              onChange={(event) => props.updateNewEmpleadoData(event, "nombre")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Apellido</label>
          </td>
          <td>
            <input
              type="text"
              value={props.NewEmpleadoInfo["apellido"]}
              onChange={(event) => props.updateNewEmpleadoData(event, "apellido")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Documento de identidad</label>
          </td>
          <td>
            <input
              type="number"
              value={props.NewEmpleadoInfo["documento"]}
              onChange={(event) => props.updateNewEmpleadoData(event, "documento")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="text"
              value={props.NewEmpleadoInfo["email"]}
              onChange={(event) => props.updateNewEmpleadoData(event, "email")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Contraseña</label>
          </td>
          <td>
            <input
              type="text"
              value={props.NewEmpleadoInfo["contrasena"]}
              onChange={(event) => props.updateNewEmpleadoData(event, "contrasena")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Confirmar contrasena</label>
          </td>
          <td>
            <input
              type="text"
              value={props.NewEmpleadoInfo["contrasenaconf"]}
              onChange={(event) => props.updateNewEmpleadoData(event, "contrasenaconf")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button className={classes["send-button"]} onClick={props.submitEmpleado}>Agregar Empleado</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default NewEmpleado;

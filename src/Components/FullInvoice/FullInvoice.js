import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./FullInvoice.module.css";

var FullInvoice = (props) => {
  var postIndex = props.match.params.postIndex;
  var openInvoice = props.openInvoice(postIndex);

  return openInvoice ? (
    <div
      className={classes["full-post"]}
    >
      <h2>Nombre del empleado</h2>
      <h2>{openInvoice.id_empleado}</h2>
      <h3>Surtidor</h3>
      <p>{openInvoice.id_pump}</p>
      <h3>Fecha</h3>
      <p>{openInvoice.fecha}</p>
      <h3>Numeracion</h3>
      <p>{openInvoice.numeracion}</p>
      <h3>Dinero entregado</h3>
      <p>${openInvoice.entregado}</p>
      <p hidden>{openInvoice.id}</p>
      <button className={classes["cancel-button"]}><a onClick={() => props.removeInvoice(openInvoice.id)}>Eliminar</a></button>
    </div>
  ) : null;
};

export default withRouter(FullInvoice);

import React from "react";
import { Link } from "react-router-dom";

import classes from "./Invoice.module.css";

var Invoice = (props) => {
  return (
    <Link to={"/invoice/" + props.postIndex}>
      <div className={classes["post"]}>
        <h2>{props.invoice_prop.fecha}</h2>
        <h3>Dinero entregado</h3>
        <p>{props.invoice_prop.entregado}</p>
        <h3>Empleado</h3>
        <p>{props.invoice_prop.id_empleado}</p>
      </div>
    </Link>
  );
};

export default Invoice;

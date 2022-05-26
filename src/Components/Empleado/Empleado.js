import React from "react";
import { Link } from "react-router-dom";

import classes from "./Empleado.module.css";

var Empleado = (props) => {
  return (
    <Link to={"/post/" + props.postIndex}>
      <div className={classes["post"]}>
        <h2>{props.post.nombre} {props.post.apellido}</h2>
        <p>{props.post.documento}</p>
      </div>
    </Link>
  );
};

export default Empleado;

import React from "react";

import Empleado from "../Empleado/Empleado";

var Empleados = (props) => {
  return (
    <section className="posts">
      {props.posts.map((post, postIndex) => {
        return <Empleado post={post} postIndex={postIndex} key={postIndex} />;
      })}
    </section>
  );
};

export default Empleados;

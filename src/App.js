import React, { Component } from "react";

import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";


import axios from "./instances/axiosInstance";
import FullEmpleado from "./Components/FullEmpleado/FullEmpleado";
import FullInvoice from "./Components/FullInvoice/FullInvoice";
import NewEmpleado from "./Components/NewEmpleado/NewEmpleado";
import Empleados from "./Components/Empleados/Empleados";
import Invoices from "./Components/Invoices/Invoices";

import classes from "./App.module.css";

class App extends Component {
  state = {
    posts: [],
    NewEmpleadoInfo: {
      id:"",
      nombre: "",
      apellido: "",
      documento: "",
      email: "",
      contrasena: ""
    },
    invo: [],
    NewInvoiceInfo: {
      id:"",
      id_empleado:"",
      id_pump:"",
      fecha:"",
      numeracion:"",
      entregado:""
    },
  };

  fetchEmpleados = async () => {
    try {
      const response_empleado = await axios.get("/empleado");
      const response_invoice = await axios.get("/invoice");

      const posts = response_empleado.data.map((post) => ({
        id: post.id,
        nombre: post.nombre,
        apellido: post.apellido,
        documento: post.documento,
        email: post.email,
        contrasena: post.contrasena
      }));

      const invo = response_invoice.data.map((invoice_prop) => ({
        id: invoice_prop.id,
        id_empleado: invoice_prop.id_empleado,
        id_pump: invoice_prop.id_pump,
        fecha: invoice_prop.fecha,
        numeracion: invoice_prop.numeracion,
        entregado: invoice_prop.entregado
      }));

      this.setState({ posts });
      this.setState({ invo });
    } catch (err) {
      console.error("Oh no!! an error!", err);
    }
    
  };

  componentDidMount() {
    this.fetchEmpleados();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav className={classes["nav-bar"]}>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/new-empleado">Agregar Empleado</Link>
                </li>
                <li>
                  <Link to="/invoices">Invoices</Link>
                </li>
              </ul>
            </nav>
          </header>
          <h1 className={classes["main-header"]}>Administracion</h1>

          <Route
            path="/new-empleado"
            render={() => (
              <NewEmpleado
                NewEmpleadoInfo={this.state.NewEmpleadoInfo}
                updateNewEmpleadoData={this.updateNewEmpleadoData}
                submitEmpleado={this.submitEmpleado}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={() => <Empleados posts={this.state.posts} />}
          />
          <Route
            path="/invoices"
            exact
            render={() => <Invoices invo={this.state.invo} />}
          />
          <Route
            path="/post/:postIndex"
            exact
            render={() => (
              <FullEmpleado
                openEmpleado={(postIndex) => this.openEmpleado(postIndex)}
                removeEmpleado={this.removeEmpleado}
              />
            )}
          />
                    <Route
            path="/invoice/:postIndex"
            exact
            render={() => (
              <FullInvoice
              openInvoice={(postIndex) => this.openInvoice(postIndex)}
              removeInvoice={this.removeInvoice}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }

  openEmpleado = (postIndex) => {
    return this.state.posts[postIndex];
  };

  openInvoice = (postIndex) => {
    return this.state.invo[postIndex];
  };

  updateNewEmpleadoData = (event, type) => {
    var updatedNewEmpleadoInfo = {
      ...this.state.NewEmpleadoInfo,
    };

    updatedNewEmpleadoInfo[type] = event.target.value;

    this.setState({
      NewEmpleadoInfo: updatedNewEmpleadoInfo,
    });
  };

  removeEmpleado = async (postIndex) => {
    try {
      const response_empleado = await axios.delete(`/empleado/${postIndex}`);
      console.log("response_empleado:", response_empleado);
      window.location.href= "/"
  
    } catch (err) {
      console.error("An error removing the post", err);
    }
  };

  removeInvoice = async (postIndex) => {
    try {
      const response_invoice = await axios.delete(`/invoice/${postIndex}`);
      console.log("response_invoice:", response_invoice);
      window.location.href= "/invoices"
  
    } catch (err) {
      console.error("An error removing the post", err);
    }
  };

  submitEmpleado = async () => {
    var updatedEmpleados = [...this.state.posts];
    var NewEmpleadoInfo = { ...this.state.NewEmpleadoInfo };

    updatedEmpleados.push(NewEmpleadoInfo);

    try {
      await axios.post("/empleado", NewEmpleadoInfo);

      this.setState({
        posts: updatedEmpleados,
        NewEmpleadoInfo: {
            id:"",
            nombre:"",
            apellido:"",
            email:"",
            documento:"",
            estacion:"",
            contrasena:"",
            contrasenaconf:""
        },
      });
    } catch (err) {
      console.error("An error with POST", err);
    }
  };
}

export default App;

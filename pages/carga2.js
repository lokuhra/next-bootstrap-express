import React, { Component } from 'react'
import App from "../components/App";
import Card from "../components/Card";
import Modal from 'react-responsive-modal';
import { ToastContainer, toast } from "react-toastify";

// Modal.setAppElement('#yourAppElement')

export default class Carga extends Component {

  constructor(props) {
    super(props);
    this.state={
      modalIsOpen: false
    }
  }


  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });
    return {};
  }



  click = () =>{
    toast.success(`Archivo de Leido`, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      newestOnTop: true,
      pauseOnHover: true,
      draggable: true
    });
  }

  openModal = () =>{
    this.setState({modalIsOpen: true});
  }


  closeModal=()=> {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <App title="Carga">
        <Card color={"has-background-danger"} title={"Etiquetas"}/>
        <Card color={"has-background-danger"} title={"Supervisores"}/>
        <Card color={"has-background-danger"} title={"Faltantes"}/>
        <Card color={"has-background-danger"} title={"Otros"}/>
        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
        />
        <button onClick={this.openModal}></button>
        <Modal open={this.state.modalIsOpen} onClose={this.closeModal} center className={"modal"}>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
            </header>
            <section className="modal-card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur ea eligendi illo non odio pariatur placeat possimus praesentium ratione. Animi corporis deleniti doloribus exercitationem id officiis porro reiciendis repudiandae!</p>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success" onClick={this.closeModal}>ok</button>
            </footer>
          </div>
        </Modal>

      </App>
    );
  }
}

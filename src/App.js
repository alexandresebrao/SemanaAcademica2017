import React, { Component } from 'react';
import './App.css';
import Button from './Components/Button.js';
import TextInput from './Components/TextInput';
import { Modal } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      namesList:[],
      showDeleteModal: false
    };
    this.handleInsert = this.handleInsert.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
  }

  handleInsert() {
    var newList = this.state.namesList;

    if (this.state.item !== null) {
      newList.push(this.state.item);
      this.setState({namesList: newList, item: null});
    } else {
      alert("Valor vazio :(");
    }
  }

  handleChange(value) {
    this.setState({item: value});
  }

  handleOpenDeleteModal() {
    this.setState({showDeleteModal: true});
  }

  handleDelete() {
    this.setState({
          item: null,
          namesList:[]
        });
  }

  getListNames() {
    return (
      <ul>
        {this.state.namesList.map((item, count) => <li key={count}>{item}</li>)}
      </ul>
    )
  }

  closeDeleteModal() {
    this.setState({showDeleteModal: false});
  }

  getDeleteModal() {
    return(
      <Modal show={this.state.showDeleteModal} onHide={this.closeDeleteModal}>
          <Modal.Header closeButton>
            <Modal.Title>Alerta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Voce tem certeza que deseja deletar tudo?
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeDeleteModal}  color="default" text="Cancelar!" />
            <Button onClick={this.closeDeleteModal}  color="danger" text="Okay!" />
          </Modal.Footer>
        </Modal>
      )
  }

  render() {
    return (
      <div className="App">
        <div>
          <TextInput value={this.state.item} label="Digite seu nome: " onChange={this.handleChange} />
          <Button onClick={this.handleInsert} icon="plus" text="Clique me!" />
          <Button onClick={this.handleOpenDeleteModal} color="danger" icon="remove" text="Apagar!" />
        </div>
        <div>
          <h2>Lista de Nomes</h2>
          {this.getListNames()}
        </div>
        {this.getDeleteModal()}
      </div>
    );
  }
}

export default App;

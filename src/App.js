import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };
  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };
  render() {
    return (
      <>
        <h1
          style={{
            padding: "0px 20px",
            textAlign: "center",
          }}
        >
          Phonebook
        </h1>
        <Form addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;

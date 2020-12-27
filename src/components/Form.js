import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
  state = {
    name: "",
    id: "",
    number: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", event.target);
    const newContact = {
      name: this.state.name,
      id: uuidv4(),
      number: this.state.number,
    };
    console.log(newContact);
    console.log("Props", this.props);
    this.props.addContact(newContact);
  };
  handleChange = (event) => {
    console.log("change", event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <form
        style={{
          display: "inline-block",
          width: "241px",
          padding: "10px 20px",
          textAlign: "center",
          margin: "0% 43%",
        }}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={this.handleChange}
          id="name"
          type="text"
          placeholder="Enter your name please"
        />
        <label htmlFor="number">Number</label>
        <input
          name="number"
          onChange={this.handleChange}
          placeholder="Enter your number please"
          id="number"
          type="tel"
        />
        <button
          style={{
            borderRadius: "19px",
            fontWeight: "bold",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}
export default Form;

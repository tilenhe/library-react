import React, { Component } from "react";

export class AddBook extends Component {
  state = {
    title: "",
    author: "",
    pages: "",
    read: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addBook(this.state);
    this.setState({ title: "", author: "", pages: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        Title:{" "}
        <input
          id="title"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <br />
        Author:{" "}
        <input
          id="author"
          type="text"
          name="author"
          value={this.state.author}
          onChange={this.onChange}
        />
        <br />
        Pages:{" "}
        <input
          id="pages"
          type="number"
          name="pages"
          value={this.state.pages}
          onChange={this.onChange}
        />
        <br />
        <input value="Submit" type="submit" />
      </form>
    );
  }
}

const formStyle = {
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px dotted #ccc"
};

export default AddBook;

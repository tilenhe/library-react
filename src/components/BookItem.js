import React, { Component } from "react";
import PropTypes from "prop-types";

export class BookItem extends Component {
  getStyle = () => {
    return {
      color: this.props.book.read ? "green" : "red"
    };
  };

  delBook = e => {
    console.log(12345);
  };
  render() {
    const { title, author, pages, id } = this.props.book;
    return (
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderBottom: "1px dotted #ccc"
        }}
      >
        <h3>
          {title}{" "}
          <button onClick={this.delBook()} className="btn-delete">
            x
          </button>
        </h3>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p style={this.getStyle()}>
          <input
            type="checkbox"
            onChange={this.props.markRead.bind(this, id)}
          ></input>{" "}
          Read
        </p>
      </div>
    );
  }
}

//PropTypes
BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;

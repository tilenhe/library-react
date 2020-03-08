import React from "react";
import BookItem from "./BookItem";
import PropTypes from "prop-types";

class BookList extends React.Component {
  render() {
    return this.props.books.map(book => (
      <BookItem key={book.id} book={book} markRead={this.props.markRead} />
    ));
  }
}

//PropTypes
BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;

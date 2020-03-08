import React from "react";
import "./App.css";
import BookList from "./components/BookList";

class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        pages: 300,
        read: true
      },
      {
        id: 2,
        title: "The Hobbit",
        author: "Tolkien",
        pages: 250,
        read: true
      },
      {
        id: 3,
        title: "Witcher",
        author: "Andrej Sapowski",
        pages: 200,
        read: false
      }
    ]
  };

  markRead = id => {
    this.setState({
      books: this.state.books.map(book => {
        if (book.id === id) {
          book.read = !book.read;
        }
        return book;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Library (React App)</h1>
        <BookList books={this.state.books} markRead={this.markRead} />
      </div>
    );
  }
}

export default App;

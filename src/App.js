import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import Header from "./components/Header";
import AddBook from "./components/AddBook";
import { v4 as uuidv4 } from "uuid";

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

  // Mark read
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

  //Delete book
  delBook = id => {
    this.setState({
      books: [
        ...this.state.books.filter(book => {
          return book.id !== id;
        })
      ]
    });
  };

  // Add Book
  addBook = state => {
    const newBook = {
      id: uuidv4(),
      title: state.title,
      author: state.author,
      pages: state.pages,
      read: state.read
    };
    this.setState({
      books: [...this.state.books, newBook]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <AddBook addBook={this.addBook} />
        <BookList
          books={this.state.books}
          markRead={this.markRead}
          delBook={this.delBook}
        />
      </div>
    );
  }
}

export default App;

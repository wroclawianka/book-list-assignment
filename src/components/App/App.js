import React from 'react';
import './App.css';
import base from "../../base";
import { BooksList } from "./../BooksList/BooksList";
import { BookDetails } from "./../BookDetails/BookDetails";
import { AddBook } from "./../AddBook/AddBook";

class App extends React.Component {
  constructor()  {
    super();
    this.state = {
      books: [],
      bookLink: null
    }
  }
  onBookSelected(bookLink){
    this.setState({
      bookLink: bookLink
    })
  }

  onAddBook(book){
    let bookList = this.state.books
    bookList.push(book);
    this.apiService.addBook(book);
    this.setState({
      books: bookList
    })
  }

  componentDidMount() {
    this.fetchBookList();
  }
    

  fetchBookList() {
    this.ref = base.syncState("items", {
      context: this,
      state: 'books'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center">
            <h1>Bookshelf</h1>
            <p>Your personal list of books</p> 
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xs-4 col-xs-offset-1">
              <BooksList books={this.state.books} bookLink={this.onBookSelected.bind(this)}/>
            </div>
            <div className="col col-xs-4 col-xs-offset-1">
              <BookDetails bookLink={this.state.bookLink}/>
            </div>
            <div className="col col-xs-4 col-xs-offset-1">
              <AddBook book={this.onAddBook.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

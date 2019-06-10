import React from 'react';
import './App.css';
import base from "../../base";
import { BooksList } from "./../BooksList/BooksList";
import { BookDetails } from "./../BookDetails/BookDetails";
import { AddBook } from "./../AddBook/AddBook";
import {Footer} from "../Footer/Footer";

class App extends React.Component {
  constructor()  {
    super();
    this.state = {
      books: [],
      defaults: [],
      bookId: null
    }
    this.restoreDefaults = this.restoreDefaults.bind(this);
  }
  onBookSelected(bookId){
    this.setState({
      bookId: bookId
    })
  }

  onAddBook(book){
    let bookList = this.state.books
    book.id = this.state.books.length;
    bookList.push(book);
    this.setState({
      books: bookList
    })
  }

  componentDidMount() {
    this.syncBookList();
    this.getDefaults();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
    
  syncBookList() {
    this.ref = base.syncState("items", {
      context: this,
      state: 'books'
    });
  }

  getDefaults(){
    base.syncState("defaults", {
      context: this,
      state: 'defaults'
    });}

  restoreDefaults() {
    this.setState({ 
      books: this.state.defaults
    })
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
              <BooksList books={this.state.books} bookId={this.onBookSelected.bind(this)}/>
              <button type="button" onClick={this.restoreDefaults} class="btn btn-light">Restore defaults</button>
            </div>
            <div className="col col-xs-4 col-xs-offset-1">
              <BookDetails book={this.state.books[this.state.bookId]}/>
            </div>
            <div className="col col-xs-4 col-xs-offset-1">
              <AddBook book={this.onAddBook.bind(this)}/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

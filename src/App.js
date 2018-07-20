import React from 'react';
import './App.css';
import { BooksList } from "./components/BooksList/BooksList";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { AddBook } from "./components/AddBook/AddBook";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron text-center">
          <h1>Bookshelf</h1>
          <p>Your list of books</p> 
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xs-10 col-xs-offset-1">
              <BooksList/>
            </div>
            <div className="col col-xs-10 col-xs-offset-1">
            <BookDetails/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

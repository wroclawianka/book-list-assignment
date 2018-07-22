import React from 'react';
import './App.css';
import { BooksList } from "./components/BooksList/BooksList";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { AddBook } from "./components/AddBook/AddBook";

class App extends React.Component {
  constructor()  {
    super();
    this.state = {
      bookLink: null
    }
  }
  onBookSelected(bookLink){
    this.setState({
      bookLink: bookLink
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
              <BooksList bookLink={this.onBookSelected.bind(this)}/>
            </div>
            <div className="col col-xs-4 col-xs-offset-1">
              <BookDetails bookLink={this.state.bookLink}/>
            </div>
            <div className="col col-xs-4 col-xs-offset-1">
              <AddBook/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

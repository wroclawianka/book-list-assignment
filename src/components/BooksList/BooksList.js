import React from "react";
import PropTypes from 'prop-types';
import "./BooksList.css";
// import { ApiService } from '../../services/ApiService/ApiService'
import { Book } from "./Book";

export class BooksList extends React.Component {

    constructor() {
        super()
        // this.apiService = new ApiService();
        this.state = { books: []};
    }

    componentDidMount() {
        this.fetchBookList();
    }
    
    fetchBookList() {
        let init = {};
        let apiUrl = "http://localhost:3001"
        let bookList = []
        fetch(`${apiUrl}/items`, init)
        .then(response => response.json())
        .then(items => {
            items.forEach(item => {
                bookList.push(
                    new Book(item.id, item.link, item.title)
                )
            });
            this.setState({
                books: bookList
            })
        })
      }

    render() {
        return (
        <div>
            <h3>List of your books</h3>
            <div>
                <ul>
                    {this.state.books.map(function(book){
                        return (<li key={book.id}><a href={book.link}>{book.title}</a></li>)
                    })}
                </ul>
            </div>
        </div>
        )
    }

}
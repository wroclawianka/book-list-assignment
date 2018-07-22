import React from "react";
import "./BooksList.css";
import { ApiService } from '../../services/ApiService/ApiService'
import { Book } from "./Book";

export class BooksList extends React.Component {

    constructor() {
        super()
        this.apiService = new ApiService();
        this.state = { books: []};
    }

    componentDidMount() {
        this.fetchBookList();
    }
    
    fetchBookList() {
        let bookList = []
        this.apiService.fetchBooksList()
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

    onBookSelect(bookLink) {
        this.props.bookLink(bookLink);
    }

    render() {
         return (
        <div className="section">
            <h3>List of your books</h3>
            <hr/>
            <div>
                <ul className="items">
                    {this.state.books.map((book) => {
                        return (
                        <li onClick={() => this.onBookSelect(book.link)} className="item" key={book.id}>
                            {book.title}
                        </li>
                    )
                    })}
                </ul>
            </div>
        </div>
        )
    }
}
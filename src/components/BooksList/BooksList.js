import React from "react";
import "./BooksList.css";
import base from "../../base";
import { Book } from "./Book";

export class BooksList extends React.Component {

    constructor() {
        super()
        this.state = { 
            books: []
        };
    }

    componentDidMount() {
        this.ref = base.syncState("items", {
            context: this,
            state: 'books'
        });
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
import React from "react";
import "./BooksList.css";
import { Book } from "./Book";

export class BooksList extends React.Component {

    constructor() {
        super()
        // this.books = set type of prop
        this.books = [
            new Book(1, "Mistrz i Małgorzata"),
            new Book(2, "Clean Code"),
            new Book(3, "Homo Sapiens"),
            new Book(4, "Ania z zielonego wzgórza"),
            new Book(5, "Antygona"),
            new Book(6, "JavaScript & jQuery")
        ]
    }

    render() {
        return (
        <div>
            <h3>List of your books</h3>
            <div>
                <ul>
                    {this.books.map(function(book){
                        return (<li key={book.id}><a href={book.link}>{book.title}</a></li>)
                    })}
                </ul>
            </div>
        </div>
        )
    }
}
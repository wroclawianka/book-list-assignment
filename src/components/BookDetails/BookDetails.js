import React from "react";
import "./BookDetails.css"
import { Book } from "./Book";

export class BookDetails extends React.Component {
    constructor() {
        super();
        this.book = new Book(
            1, 
            "https://source.unsplash.com/2zDw14yCYqk/250x250",
             "Mistrz i Małgorzata",
             "Michaił Bułhakow", 
             10.20
            )
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
        <div>
            <div className="book-details">
            <h3>Book Details</h3>
            <img src={this.book.image} alt=""/>     
            <h4>{this.book.title}</h4>
            <p>{this.book.author}</p>
            <p>{this.book.price}</p>
            </div>
        </div>
        )
    }
}
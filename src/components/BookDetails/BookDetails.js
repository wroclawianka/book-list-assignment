import React from "react";
import "./BookDetails.css"
import base from "../../base";
import { Book } from "./Book";

export class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.ref = base.syncState(`/items/${nextProps.bookLink}`, {
            context: this,
            state: 'book'
        });
    }

    render() {
        let selectTheBook = (
        <p>Please, select the book to display</p>
        );
        let details = (
        <div> 
            <h4 className="title">{this.state.book.title}</h4>
            <p className="author">{this.state.book.author}</p>
            <p className="price">{this.state.book.price}</p>
            <div><img src={this.state.book.image} alt={this.state.book.title}/></div>     
        </div>)
        let content = (this.state.book === '') ? selectTheBook : details; 

        return (
        <div>
            <div className="section">
            <h3>Book Details</h3>
            <hr/>
            {content}
            </div>
        </div>
        )
    }
}
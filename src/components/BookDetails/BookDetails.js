import React from "react";
import "./BookDetails.css"
import { ApiService } from '../../services/ApiService/ApiService'
import { Book } from "./Book";

export class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.apiService = new ApiService();
        this.state = {
            book : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.bookLink) this.fetchBookDetails(nextProps.bookLink);
    }

    fetchBookDetails(bookLink) {
        this.apiService
        .fetchBookDetails(bookLink)
        .then(item => {
            let newBook = new Book(item.id, item.image, item.title, item.author, item.price.toFixed(2))
            this.setState({
                book : newBook 
            })
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
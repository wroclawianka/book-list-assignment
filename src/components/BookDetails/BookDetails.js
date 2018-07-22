import React from "react";
import "./BookDetails.css"
import { ApiService } from '../../services/ApiService/ApiService'
import { Book } from "./Book";

export class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.apiService = new ApiService();
        this.state = {
            book : new Book(
                    1, 
                    "https://source.unsplash.com/2zDw14yCYqk/250x250",
                     "Mistrz i Małgorzata",
                     "Michaił Bułhakow", 
                     10.20
                    )
        }
    }

    componentWillReceiveProps(nextProps) {
        this.fetchBookDetails(nextProps.bookLink);
    }

    fetchBookDetails(bookLink) {
        this.apiService.fetchBookDetails(bookLink)
        .then(item => {
            let newBook = new Book(item.id, item.image, item.title, item.author, item.price)
            this.setState({
                book : newBook 
            })
        });
    }

    render() {
        return (
        <div>
            <div className="book-details">
            <h3>Book Details</h3>
            <img src={this.state.book.image} alt=""/>     
            <h4>{this.state.book.title}</h4>
            <p>{this.state.book.author}</p>
            <p>{this.state.book.price}</p>
            </div>
        </div>
        )
    }
}
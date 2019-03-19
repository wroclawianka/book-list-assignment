import React from "react";
import { ApiService } from "../../services/ApiService/ApiService";
import { Book } from "./Book"

export class AddBook extends React.Component {
    constructor() {
        super();
        this.apiService = new ApiService();
        this.state = {
            title: '',
            author: '',
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
      }

    handleSubmit(event) {
        this.addBook();
        event.preventDefault();
    }
    
    addBook() {
        let image = "https://source.unsplash.com/2zDw14yCYqk/200x250";
        let title = this.state.title;
        let author = this.state.author;
        let price = parseInt(this.state.price, 10);
        let book = new Book(image, title, author, price);
        this.props.book(book);
    }

    render() {
        return (
        <div className="section">
            <h3>Add book</h3>
            <hr/>
            <form className="form-group" onSubmit={this.handleSubmit}>
                <label>Title:
                <input className="form-control" type="text" name="title" onChange={this.handleChange}/></label>
                <label>Author:
                <input className="form-control" type="text" name="author" onChange={this.handleChange}/></label>
                <label>Price:
                <input className="form-control" type="number" name="price" onChange={this.handleChange}/></label>
                <br/>
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </form> 
        </div>
        )
    }
}
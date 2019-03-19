import React from "react";
import "./BooksList.css";

export class BooksList extends React.Component {

    constructor(props) {
        super(props)
        this.state = { books: this.props.books };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            books: nextProps.books
        })
    }

    onBookSelect(bookId) {
        this.props.bookId(bookId);
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
                        <li onClick={() => this.onBookSelect(book.id)} className="item" key={book.id}>
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
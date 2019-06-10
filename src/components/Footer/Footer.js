import React from "react";
import "./Footer.css";

export class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <span className="text-muted">
                        All Rights Reserved | Design and code by
                        <a href="https://wroclawianka.github.io/"> Dorota Zelga </a>
                          |
                        <a href="https://github.com/wroclawianka/book-list-assignment"> Repository</a>
                    </span>
                </div>
            </div>
        )
    }
}
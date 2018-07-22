export class ApiService {
    apiUrl = "http://localhost:3001"
    headers = {
        "Content-Type": "application/json"
    }

    fetchBooksList() {
        let options = {
            method: "GET",
            headers: this.headers
        };
        return fetch(`${this.apiUrl}/api/v1/items`, options)
        .then(response => response.json());
    }

    fetchBookDetails(link) {
        let options = {
            method: "GET",
            headers: this.headers
        };
        return fetch(this.apiUrl + link, options)
        .then(response => response.json());
    }

    addBook(id, data) {
        let options = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: this.headers
        };
        return fetch(`${this.apiUrl}/api/v1/items/${id}`, options)
        .then(res => {
            return res;
        }).catch(err => err);
    }
}
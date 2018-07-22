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
}
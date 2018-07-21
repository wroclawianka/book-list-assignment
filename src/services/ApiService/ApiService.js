export class ApiService {
    apiUrl = "http://localhost:3001/api/v1"
    headers = {
        "Content-Type": "application/json"
    }

    fetchBooksList() {
        let init = {
            method: "GET",
            headers: this.headers
        };
        return fetch(`${this.apiUrl}/items`, init)
        .then(response => response.json());
    }
}
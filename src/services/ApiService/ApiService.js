export class ApiService {
    apiUrl = "http://localhost:3001/api/v1"

    fetchBooksList() {
        let init = {};
        return fetch(`${this.apiUrl}/items`, init)
        .then(response => response.json());
    }
}
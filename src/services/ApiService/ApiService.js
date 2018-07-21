export class ApiService {
    apiUrl = "http://localhost:3001"

    fetchBooksList() {
        let init = {};
        let apiUrl = "http://localhost:3001"
        return fetch(`${apiUrl}/items`, init)
        .then(response => response.json());
    }
}
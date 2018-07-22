export class ApiService {
    apiUrl = "http://localhost:3001";
    itemsPath = "/api/v1/items"
    itemsUrl = this.apiUrl + this.itemsPath;
    headers = {
        "Content-Type": "application/json"
    };

    fetchBooksList() {
        let options = {
            method: "GET",
            headers: this.headers
        };
        return fetch(this.itemsUrl, options)
        .then(response => response.json());
    }

    fetchBookDetails(path) {
        let options = {
            method: "GET",
            headers: this.headers
        };
        return fetch(this.apiUrl + path, options)
        .then(response => response.json());
    }

    addBook(data) {
        let options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: this.headers
        };
        return fetch(this.itemsUrl, options)
        .then(response => response.json())
        .then(data => this.updateLink(data.id)
        ).catch(err => err);
    }


    updateLink(id) {
        let link = `${this.itemsPath}/${id}`;
        let options = {
            method: "PATCH",
            body: `{"link" : "${link}"}`,
            headers: this.headers
        };
        return fetch(`${this.itemsUrl}/${id}`, options)
        .then(response => response.json());
    }
}
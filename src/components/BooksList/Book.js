export class Book {
    constructor(id, title) {
        this.id = id;
        this.link = `/api/v1/items/${id}`;
        this.title = title;
    }
}
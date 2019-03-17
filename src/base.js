import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHuD-RINXY5JC_-BhZsHJ7UbgIycqHk3E",
  authDomain: "book-list-dorota-zelga.firebaseapp.com",
  databaseURL: "https://book-list-dorota-zelga.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

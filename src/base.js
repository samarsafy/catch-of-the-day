import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqjTrbn9s9zct8N96o9pKORkTxEpRtKNo",
  authDomain: "catch-of-the-day-samar.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-samar.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export

export default base;

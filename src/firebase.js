import firebase from "firebase";

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyATvaVwdISBJeyOnfESbT7orVKOE_J9bOU",
    authDomain: "burgerqueen-60cb4.firebaseapp.com",
    databaseURL: "https://burgerqueen-60cb4.firebaseio.com",
    projectId: "burgerqueen-60cb4",
    storageBucket: "burgerqueen-60cb4.appspot.com",
    messagingSenderId: "362014168629",
    appId: "1:362014168629:web:2d55426aa19258cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
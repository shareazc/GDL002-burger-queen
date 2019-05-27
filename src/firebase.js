import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBcUvIFTr_xSpEwu3xGcOyLgq_kP4SnFac",
  authDomain: "testfb-69c0a.firebaseapp.com",
  databaseURL: "https://testfb-69c0a.firebaseio.com",
  projectId: "testfb-69c0a",
  storageBucket: "testfb-69c0a.appspot.com",
  messagingSenderId: "740075735515",
  appId: "1:740075735515:web:32be2ff8f8503247"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase;
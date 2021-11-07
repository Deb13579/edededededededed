import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyB0u2uGB_4T9OeZ2ZNRor4jljJSYF9TRqE",
    authDomain: "deeeeeeeeeeeeeeeee-8740a.firebaseapp.com",
    projectId: "deeeeeeeeeeeeeeeee-8740a",
    databaseURL: "https://deeeeeeeeeeeeeeeee-8740a.firebaseio.com",
    storageBucket: "deeeeeeeeeeeeeeeee-8740a.appspot.com",
    messagingSenderId: "783329855059",
    appId: "1:783329855059:web:da0f77866dc6b41f3b28a6"
  };
 
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


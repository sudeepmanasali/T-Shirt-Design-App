import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAnK0udLmfI7LuPWm-wqSmcZuMMTwqqWHk",
    authDomain: "mytshirtapp-6e454.firebaseapp.com",
    databaseURL: "https://mytshirtapp-6e454.firebaseio.com",
    projectId: "mytshirtapp-6e454",
    storageBucket: "mytshirtapp-6e454.appspot.com",
    messagingSenderId: "388238059286",
    appId: "1:388238059286:web:20aef692f2a96df76a5237",
    measurementId: "G-HQQQQ4TEJC"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }
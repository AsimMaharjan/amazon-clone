var firebaseConfig = {
    apiKey: "AIzaSyCfurEOyoC-ZJilAHRp0oUnEztXzvcvoW8",
    authDomain: "clone-34926.firebaseapp.com",
    projectId: "clone-34926",
    storageBucket: "clone-34926.appspot.com",
    messagingSenderId: "1032438518868",
    appId: "1:1032438518868:web:126c05baaa79ade520c9c1",
    measurementId: "G-B98SYLC172"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();
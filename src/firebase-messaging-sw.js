importScripts("https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyBKiG5mw15BVQCroa79ieTuNINtPPxUqxM",
  authDomain: "day-planner-47080.firebaseapp.com",
  databaseURL: "https://day-planner-47080.firebaseio.com",
  projectId: "day-planner-47080",
  storageBucket: "day-planner-47080.appspot.com",
  messagingSenderId: "241129470415",
  appId: "1:241129470415:web:a9ce5e60531af5e405faba",
  measurementId: "G-R390GBJK8L",
});
const messages = firebase.messaging();

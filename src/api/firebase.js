import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCcQIVVksnvhsjJZGsgZVq8CyBgtEYokyQ",
  authDomain: "gb-chat-ff437.firebaseapp.com",
  databaseURL:
    "https://gb-chat-ff437-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gb-chat-ff437",
  storageBucket: "gb-chat-ff437.appspot.com",
  messagingSenderId: "77193281771",
  appId: "1:77193281771:web:c8e9647ca3526824ccbeae",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();

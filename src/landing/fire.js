import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require('firebase/auth');


let firebaseConfig = {
    apiKey: "AIzaSyCsNxRvv6L-bzaISwdFe-qRoHRAydfY1WQ",
    authDomain: "login-b4640.firebaseapp.com",
    databaseURL: "https://login-b4640.firebaseio.com",
    projectId: "login-b4640",
    storageBucket: "login-b4640.appspot.com",
    messagingSenderId: "617356559462",
    appId: "1:617356559462:web:23faac9f421b38c442d9a7"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  
  
 
  

  export default fire;
import firebase from 'firebase'

 const firebaseConfig = {
    //  apiKey: "AIzaSyAbb_29w_pVQzQeHS-ETLTp3hh-I8UMsV8",
     apiKey: `${process.env.REACT_APP_API_KEY}`,
     authDomain: "database-6bf7c.firebaseapp.com",
     projectId: "database-6bf7c",
     storageBucket: "database-6bf7c.appspot.com",
     messagingSenderId: "230701155217",
     appId: "1:230701155217:web:5d9cb836096031788e1030"
 };
 // Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
 
export default Firebase;
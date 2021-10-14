var contactApp = angular.module('contactApp',[]);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4-vIX7qX6ll1Vm0GRQKn8xIB4JtP50Ow",
    authDomain: "myproject-558db.firebaseapp.com",
    databaseURL: "https://myproject-558db.firebaseio.com",
    projectId: "myproject-558db",
    storageBucket: "myproject-558db.appspot.com",
    messagingSenderId: "674093216720",
    appId: "1:674093216720:web:b3396e492d136c1f877fd5"
};

// Inicializa la base de datos firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
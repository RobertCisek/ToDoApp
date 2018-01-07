import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAdreUZAsQfiXrokHUufi2dZAR5uq79eDE",
    authDomain: "awesome-project-41024.firebaseapp.com",
    databaseURL: "https://awesome-project-41024.firebaseio.com",
    projectId: "awesome-project-41024",
    storageBucket: "awesome-project-41024.appspot.com",
    messagingSenderId: "284034646403"
};

export default () => {
    firebase.initializeApp(config);
}
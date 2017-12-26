import firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCWiQSeJWQDhmkc__0_wauYuoZQX2a5Yoo',
  authDomain: 'first-flight-with-friend-d8ed8.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-d8ed8.firebaseio.com',
  projectId: 'first-flight-with-friend-d8ed8',
  storageBucket: 'first-flight-with-friend-d8ed8.appspot.com',
  messagingSenderId: '1085950303602'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

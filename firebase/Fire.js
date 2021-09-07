import firebase from 'firebase'; // 4.8.1

const firebaseConfig = {
  apiKey: 'dummyApiKey',
  authDomain: 'dummyAuthDomain',
  databaseURL: "dummyDatabaseURL",
  projectId: "dummyProjectID",
  storageBucket: "dummyStorageBucket",
  messagingSenderId: "dummyMessagingSenderId",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

exports.GETass = async (id) => {
  var assignments = [];
  await db
    .collection("users")
    .doc(id)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((field) => {
        assignments = field.data();
      });
    }); 
  return assignments;
};

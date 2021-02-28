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
const admin = require("firebase-admin");
require("firebase/firestore");
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

class Assignment {
  constructor(title, status, date) {
    this.title = title;
    this.status = status;
    this.date = date;
  }
  toString() {
    return this.title + ", " + this.status + ", " + this.date;
  }
}

// Firestore data converter
var assConverter = {
  toFirestore: function (ass) {
    return {
      title: ass.title,
      status: ass.status,
      date: ass.date,
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Assignment(data.title, data.status, data.date);
  },
};

exports.GETass = async (id) => {
  var assignments = [];
  const doc = await db.collection("users").doc(id).get();
  assignments = doc.data().assignments;
  console.log(assignments);
  console.log(typeof assignments);
  return assignments;
};

exports.POSTass = async (userID, name, date) => {
  // data = {
  //   title: name,
  //   date: date,
  //   status: "not submitted",
  // };
  const student = db.collection("users").doc(userID);
  const res = await student.update(
    {
      assignments: [{ title: name, status: "not submitted", date: date }],
    },
    { merge: true }
  );
  // const unionRes = await student.update({
  //   assignments: admin.firestore.FieldValue.arrayUnion({
  //     title: name,
  //     status: "not submitted",
  //     date: date,
  //   }),
  // });
  console.log(res);
};

exports.UPDATEass = async (id, title) => {
  var assignments = [];
  const doc = await db.collection("users").doc(id).get();
  assignments = doc.data().assignments;
  for (let i = 0; i < assignments.length; i++) {
    if (assignments[i].title === title) {
      // toggle to false
    }
  }
  return assignments;
};

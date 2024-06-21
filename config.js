const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCiptDvHB_n6Jcoen1uLmDHxMfHZle89eY",
  authDomain: "nostalgia-87f97.firebaseapp.com",
  projectId: "nostalgia-87f97",
  storageBucket: "nostalgia-87f97.appspot.com",
  messagingSenderId: "871019708499",
  appId: "1:871019708499:web:5966e8614c0fec6a5386a6",
  measurementId: "G-XRHBYVJHLN",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const ImageDetail = db.collection("ImageDetails");
const ImageGallery = db.collection("ImageGallery");
module.exports = { ImageDetail, ImageGallery };

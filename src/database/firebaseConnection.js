const firebase = require('firebase');

const config = require('./firebaseConfig')

firebase.initializeApp(config);

module.exports = firebase;

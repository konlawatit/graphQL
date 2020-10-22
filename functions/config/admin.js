const admin = require('firebase-admin');
const serviceAccount = require('./keep-learning-9f475-firebase-adminsdk-ixvt3-8d572eb51a.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://keep-learning-9f475.firebaseio.com"
  });

module.exports = admin;
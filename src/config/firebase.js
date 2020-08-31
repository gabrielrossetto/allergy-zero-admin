import * as firebase from 'firebase';
import Environment from './environment';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: Environment['FIREBASE_API_KEY'],
    authDomain: Environment['FIREBASE_AUTH_DOMAIN'],
    databaseURL: Environment['FIREBASE_DATABASE_URL'],
    projectId: Environment['FIREBASE_PROJECT_ID'],
    storageBucket: Environment['FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: Environment['FIREBASE_MESSAGING_SENDER_ID']
  });
  firebase.firestore();
}

export default firebase;
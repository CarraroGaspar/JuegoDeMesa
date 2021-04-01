import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCbgtAtks6CM5AalqmkPOs6GH0G6r3wB-0",
    authDomain: "juegodemesa-5f9f2.firebaseapp.com",
    databaseURL: "https://juegodemesa-5f9f2.firebaseio.com",
    projectId: "juegodemesa-5f9f2",
    storageBucket: "juegodemesa-5f9f2.appspot.com",
    messagingSenderId: "475833262781",
    appId: "1:475833262781:web:5568245e190b1e7d080dd4"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const database = firebase.database();

  function saveFirebase(id, value) {
    return database.ref(id).push(value)
  }

  export default function serviceFirebase() {
      return saveFirebase;
  }

  export async function getAllFromCollection(collection) {
    const snapshot = await database.ref(collection).once('value')
    return snapshot;
  }

  export function getFromFirebase(id) {
      let response = {}
      database.ref(id).on('value', snapshot => response = snapshot)
      return response
  }
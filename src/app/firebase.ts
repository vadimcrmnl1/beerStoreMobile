import {initializeApp} from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDuAmHKB4VVtXqhGNsCQ7aG8sjJHhIxj3w",
    authDomain: "beerstore-5728a.firebaseapp.com",
    databaseURL: "https://beerstore-5728a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "beerstore-5728a",
    storageBucket: "beerstore-5728a.appspot.com",
    messagingSenderId: "993806951578",
    appId: "1:993806951578:web:844c794240b457eca32b23",
    measurementId: "G-EB4R05430X"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID,
//     // contentType: 'application/json'
//
// };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
console.log('db', db)

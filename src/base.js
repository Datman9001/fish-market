import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyApbkwIXnU_1tfbgSwDW_7_EQ02_eyAlII",
        authDomain: "fish-market-60371.firebaseapp.com",
        databaseURL: "https://fish-market-60371.firebaseio.com"
    
})

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export {firebaseApp};

// this is the default export
export default base;

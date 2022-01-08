import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { postUser } from '../request/userService';

export function firebaseGoogleLogin(){

  console.log("memememe");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB__1ycHIouGRe2-HnJoGWQZDWPYgdtqFY",

  authDomain: "crypto-game-wt.firebaseapp.com",

  projectId: "crypto-game-wt",

  storageBucket: "crypto-game-wt.appspot.com",

  messagingSenderId: "660751342269",

  appId: "1:660751342269:web:0a7375795db270da2d35d4",

  measurementId: "G-Y5P4YEV9H3"

};

const app = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });



const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential != null){
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("Hallo1");
    postUser(user);
    // ...
  }}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


 
}
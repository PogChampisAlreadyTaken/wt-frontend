import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userInfo } from 'os';
import { emptyUser, User } from '../model';
import { checkFirebaseUserExists, getUser, postUser } from '../request/userService';

export async function firebaseGoogleLogin(){


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
const user = signInWithPopup(auth, provider)
  .then(async (result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
    const user = result.user;

    if(await checkFirebaseUserExists(user.uid)==true){
      return getUser(user.uid).then(user=>user);
    }
    return postUser(user).then(user=>user);
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    return emptyUser();
  });

  return user;
}

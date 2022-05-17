// eslint-disable-next-line import/no-named-as-default
import Constants from "expo-constants";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import {
   Auth,
   getAuth,
   signInWithEmailAndPassword,
   createUserWithEmailAndPassword
} from "firebase/auth";

const firebaseConfig = {
   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
   apiKey: Constants.manifest?.extra!.FIREBASE_API_KEY,
   authDomain: "mealstogo-1b561.firebaseapp.com",
   projectId: "mealstogo-1b561",
   storageBucket: "mealstogo-1b561.appspot.com",
   messagingSenderId: "726985536994",
   appId: "1:726985536994:web:aae2d52a4cec08470db5bb"
};

let app: FirebaseApp, auth: Auth;

/**
 * @abstract Initializes firebase app and auth
 */
const firebaseInit = () => {
   if (!getApps().length) {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
   }
};

/**
 * @abstract Login helper for firebase auth
 * @requires firebaseInit to have been called before
 * @param email
 * @param password
 * @example email: "mo@binni.io" , password: "test123"
 */
export const loginRequest = async (email: string, password: string) =>
   signInWithEmailAndPassword(auth, email, password);

/**
 * @abstract Registers a new user in firebase
 * @requires firebaseInit to have been called before
 * @param email
 * @param password
 * @param repeatedPassword
 * @returns
 */
export const registrationRequest = async (email: string, password: string) =>
   createUserWithEmailAndPassword(auth, email, password);

export default firebaseInit;

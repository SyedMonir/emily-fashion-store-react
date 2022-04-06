// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwuzee1Swdem98rGihGk1Ymhrz1rkbvLg',
  authDomain: 'emily-fashion-store.firebaseapp.com',
  projectId: 'emily-fashion-store',
  storageBucket: 'emily-fashion-store.appspot.com',
  messagingSenderId: '542555378297',
  appId: '1:542555378297:web:ba7f9b78d42b4849d43aa8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

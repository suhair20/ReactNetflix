
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey:"AIzaSyBZSkwAWaiHgr-gNz8ysFDJ6M-VnixpvL4",
  authDomain: "reacty-netflixy-yt-b88f8.firebaseapp.com",
  projectId: "reacty-netflixy-yt-b88f8",
  storageBucket: "reacty-netflixy-yt-b88f8.appspot.com",
  messagingSenderId: "902777372614",
  appId: "902777372614:web:14666049d379dd4e35fcc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
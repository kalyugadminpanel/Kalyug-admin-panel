// firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAdbY-YIOMBtt1hm5D2s0_-Ifk8t3nF0gA",
  authDomain: "kalyugearnibot.firebaseapp.com",
  projectId: "kalyugearnibot",
  storageBucket: "kalyugearnibot.appspot.com",
  messagingSenderId: "31512762455",
  appId: "1:31512762455:web:14b2a59e9ac46d6d922b12"
};

const app = initializeApp(firebaseConfig);

export default app;

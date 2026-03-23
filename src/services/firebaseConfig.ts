import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9JaPW3Djh60kFN6AQfhTPWEvhhYvnarw",
  authDomain: "van-control-59a19.firebaseapp.com",
  projectId: "van-control-59a19",
  storageBucket: "van-control-59a19.firebasestorage.app",
  messagingSenderId: "221477736609",
  appId: "1:221477736609:web:620dceaf45fec40b1820e0",
  measurementId: "G-23ZBKZ5WX3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
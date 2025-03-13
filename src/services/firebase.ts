import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getEnv } from 'react-native-dotenv'; // Use dotenv for Expo

const firebaseConfig = {
  apiKey: getEnv('API_KEY'),
  authDomain: getEnv('AUTH_DOMAIN'),
  projectId: getEnv('PROJECT_ID'),
  storageBucket: getEnv('STORAGE_BUCKET'),
  messagingSenderId: getEnv('MESSAGING_SENDER_ID'),
  appId: getEnv('APP_ID'),
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

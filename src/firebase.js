import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyDQSW370LQcRpT0yEvBh9tU2V-oIfjUjGY",
  authDomain: "quiz-app-c4263.firebaseapp.com",
  projectId: "quiz-app-c4263",
  storageBucket: "quiz-app-c4263.appspot.com",
  messagingSenderId: "496486581605",
  appId: "1:496486581605:web:233760e4f5f6e90f6ccd8c",
  databaseURL: "https://quiz-app-c4263-default-rtdb.asia-southeast1.firebasedatabase.app/"
});
const analytics = getAnalytics(app);
console.log(analytics)
export default app;

// import { initializeApp } from "firebase/app";

// // firebase configuration
// const app = initializeApp({
//   apiKey: "AIzaSyDJBtiz9qEkuuDUt-j2FHQrWK9nJ4WOmyY",
//   authDomain: "react-quiz-dev-fa8ad.firebaseapp.com",
//   projectId: "react-quiz-dev-fa8ad",
//   storageBucket: "react-quiz-dev-fa8ad.appspot.com",
//   messagingSenderId: "784562024062",
//   appId: "1:784562024062:web:4eb4184f364d596119322f",
//   databaseURL:" https://react-quiz-dev-fa8ad-default-rtdb.asia-southeast1.firebasedatabase.app",
// });

// export default app;
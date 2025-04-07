// Add Firebase script
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import{getFirestore} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"
  import{getAuth} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"
  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxJhu7NzFmVYhKF_Khh5BnsORqIe2IkAw",
    authDomain: "fir-demo-sirma.firebaseapp.com",
    projectId: "fir-demo-sirma",
    storageBucket: "fir-demo-sirma.firebasestorage.app",
    messagingSenderId: "132538305553",
    appId: "1:132538305553:web:4a8c5a992592928361b5b0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
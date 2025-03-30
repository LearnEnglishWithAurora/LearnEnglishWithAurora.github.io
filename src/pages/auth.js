import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.replace("/");
    }
});

import "./profile.css";
import "/index.css";
import "/pages/home/home.css";

import multiavatar from "@multiavatar/multiavatar/esm";

import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("sign-out").onclick = () => {
    signOut(auth);
    localStorage.setItem("state", "false");
};

document.getElementById("email").innerHTML = localStorage.getItem("email");

document.getElementById("avatar").innerHTML = localStorage.getItem("svg");
onAuthStateChanged(auth, (user) => {
    if (user) {
        var svgCode = multiavatar(user.email);
        localStorage.setItem("svg", svgCode);
        document.getElementById("avatar").innerHTML = svgCode;
    }
});

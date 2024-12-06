import "./login.css";
import "/index.css";

import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

if (localStorage.getItem("state") == "true") {
    window.location.replace("../home/");
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.replace("../home/");
    } else {
        document.querySelector("#loader").remove();
    }
});

var mode = "sign-in";
document.getElementById("switch-mode").onclick = () => {
    mode = mode == "sign-up" ? "sign-in" : "sign-up";
    document.getElementById("submit").innerHTML =
        mode == "sign-in" ? "Đăng nhập" : "Đăng ký";
    document.getElementById("switch-mode").innerHTML =
        mode == "sign-in" ? "đăng ký" : "đăng nhập";
};

document.getElementById("submit").onclick = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (mode == "sign-in") {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                localStorage.setItem("state", "true");
                localStorage.setItem("email", email);
            })
            .catch((error) => {
                document.getElementById("error").style.display = "unset";
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    } else if (mode == "sign-up") {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                localStorage.setItem("state", "true");
                localStorage.setItem("email", email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
};

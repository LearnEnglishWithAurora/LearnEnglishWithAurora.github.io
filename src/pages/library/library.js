import "./library.css";
import "/index.css";
import "/pages/home/home.css";

import { words } from "./modules/ninethGrade";
console.log(words);

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    Timestamp,
    collection,
    addDoc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let email = localStorage.getItem("email");
onAuthStateChanged(auth, async (user) => {
    if (user) {
        email = user.email;
    }
});

async function addCards(cards) {
    cards.forEach(async (card) => {
        await addDoc(collection(db, email), {
            word: card[0],
            meaning: card[1],
            example: "",
            stage: 0,
            time: Timestamp.now(),
        });
    });
}

// Get selected text
document.onmouseup = () => {
    try {
        const selectObject = window.getSelection();
        const selectRange = selectObject.getRangeAt(0);
        const selectedText = selectRange.toString();
        console.log(selectedText);
    } catch {}
};

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}

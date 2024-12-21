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
    } catch { }
};

// Expand the acordion list when click
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Add cards
// console.log(document.getElementById("1"))
for (i = 1; i <= 12; i++) {
    const j = i;
    document.getElementById(i).onclick = () => {
        console.log(j, words[j]);
        addCards(words[j - 1]);
    }
}
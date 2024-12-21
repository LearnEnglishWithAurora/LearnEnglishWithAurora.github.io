import "./library.css";
import "/index.css";
import "/pages/home/home.css";

import { words, paragraphs } from "./modules/ninethGrade";
console.log(words, paragraphs);

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

// Add contents
function createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

for (let i = 1; i <= 12; i++) {
    let button = createElementFromHTML(`<button class="accordion">Unit ${i}</button>`);
    document.getElementById("grade-nine").appendChild(button);
    let content = createElementFromHTML(
        `<div class="panel">
            <div><a id="c-${i}">Thêm thẻ của Unit ${i} vào bộ thẻ</a></div>
            <div><a id="p-${i}">Đọc bài đọc có sử dụng các từ của Unit ${i}</a></div>
        </div>`
    );
    document.getElementById("grade-nine").appendChild(content);
}

// Expand the acordion list when click
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
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
for (let i = 1; i <= 12; i++) {
    document.getElementById(`c-${i}`).onclick = () => {
        // console.log(i, words[i - 1]);
        addCards(words[i - 1]);

        document.getElementById("alert").style.transform = "scale(1)";
        document.getElementById("alert").style.visibility = "visible";
        document.getElementById("alert").innerHTML = `Đã thêm ${words[i].length} từ của Unit ${i} vào bộ thẻ.`;
        setTimeout(() => {
            document.getElementById("alert").style.transform = "scale(0)";
        }, 2_000);
    }
}

// Read paragraphs
const popup = document.getElementById("reading-menu");
document.getElementById("close-reading-menu").onclick = () => {
    popup.classList.remove("show");
};

for (let i = 1; i <= 12; i++) {
    document.getElementById(`p-${i}`).onclick = () => {
        popup.classList.add("show");
        document.getElementById("paragraph-holder").innerHTML = paragraphs[i - 1];
    }
}
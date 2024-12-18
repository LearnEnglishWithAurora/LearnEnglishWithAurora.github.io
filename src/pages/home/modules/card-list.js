import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let email = "";
onAuthStateChanged(auth, async (user) => {
    if (user) {
        email = user.email;
    }
});

document.getElementById("list").onclick = () => {
    document.getElementById("card-list-menu").classList.toggle("show");

    let green = localStorage.getItem("green")
        ? JSON.parse(localStorage.getItem("green"))
        : [];
    let blue = localStorage.getItem("blue")
        ? JSON.parse(localStorage.getItem("blue"))
        : [];
    let yellow = localStorage.getItem("yellow")
        ? JSON.parse(localStorage.getItem("yellow"))
        : [];

    green.forEach((card) => {
        // const cardRef = doc(db, email, card.id);
        // deleteDoc(doc(db, email, card.id));

        addToCardList(
            "green-card",
            card.data.word,
            card.data.meaning,
            card.data.example,
            card.id
        );
    });

    blue.forEach((card) => {
        addToCardList(
            "blue-card",
            card.data.word,
            card.data.meaning,
            card.data.example,
            card.id
        );
    });

    yellow.forEach((card) => {
        addToCardList(
            "yellow-card",
            card.data.word,
            card.data.meaning,
            card.data.example,
            card.id
        );
    });
};

document.getElementById("close-card-list-menu").onclick = () => {
    document.getElementById("card-list-menu").classList.toggle("show");
    document.getElementById("card-list").innerHTML = "";
};

function addToCardList(type, word, meaning, example, id) {
    let cardHTML = `
    <div class="${type}">
        <div> <span class="material-symbols-outlined"> view_carousel </span> </div>
        <div>
            <div>
                <p style="font-weight: bold;">${word}</p>
                <p>${meaning}</p>
                <p style="font-weight: lighter;">${example}</p>
            </div>
        </div>
        <div> <span class="material-symbols-outlined" onclick="${
            // deleteDoc(
            //     doc(db, email, id)
            // )
            () => {
                console.log("!!!");
            }
        }"> delete </span> </div>
    </div>
    `;
    let card = createElementFromHTML(cardHTML);
    document.getElementById("card-list").appendChild(card);
}

function createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

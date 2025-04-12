import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
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

let green = localStorage.getItem("green")
        ? JSON.parse(localStorage.getItem("green"))
        : [],
    blue = localStorage.getItem("blue")
        ? JSON.parse(localStorage.getItem("blue"))
        : [],
    yellow = localStorage.getItem("yellow")
        ? JSON.parse(localStorage.getItem("yellow"))
        : [];
if (green.length + blue.length + yellow.length == 0)
    document.getElementById("list").classList.add("disabled");

setInterval(() => {
    green = localStorage.getItem("green")
        ? JSON.parse(localStorage.getItem("green"))
        : [];
    blue = localStorage.getItem("blue")
        ? JSON.parse(localStorage.getItem("blue"))
        : [];
    yellow = localStorage.getItem("yellow")
        ? JSON.parse(localStorage.getItem("yellow"))
        : [];

    if (green.length + blue.length + yellow.length == 0) {
        document.getElementById("list").classList.add("disabled");
        document.getElementById("card-list-menu").classList.remove("show");
    } else document.getElementById("list").classList.remove("disabled");
});

document.getElementById("list").onclick = () => {
    if (!document.getElementById("list").classList.contains("disabled")) {
        document.getElementById("card-list-menu").classList.toggle("show");

        green.forEach((card) => {
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
    }
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
                <p style="font-weight:bold">${word}</p>
                <p>${meaning}</p>
                <p style="font-weight:lighter">${example}</p>
            </div>
        </div>
        <div> <span class="material-symbols-outlined" id=${id} style="cursor:pointer"> delete </span> </div>
    </div>
    `;
    let card = createElementFromHTML(cardHTML);
    document.getElementById("card-list").appendChild(card);
    document.getElementById(id).onclick = () => {
        document.getElementById(id).parentElement.parentElement.remove();

        if (type == "green-card") {
            green = green.filter((card) => card.id != id);
            localStorage.setItem("green", JSON.stringify(green));
        } else if (type == "blue-card") {
            blue = blue.filter((card) => card.id != id);
            localStorage.setItem("blue", JSON.stringify(blue));
        } else if (type == "yellow-card") {
            yellow = yellow.filter((card) => card.id != id);
            localStorage.setItem("yellow", JSON.stringify(yellow));
        }

        document.getElementById("alert").style.transform = "scale(1)";
        document.getElementById("alert").style.visibility = "visible";
        document.getElementById(
            "alert"
        ).innerHTML = `Đã xóa từ này khỏi bộ thẻ.`;
        setTimeout(() => {
            document.getElementById("alert").style.transform = "scale(0)";
        }, 2_000);
        deleteDoc(doc(db, email, id));
    };
}

function createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

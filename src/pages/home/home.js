import "./home.css";
import "./content.css";
import "/index.css";
import "./card.css";

import "./card.js";
import { speaking } from "./card.js";

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    Timestamp,
    collection,
    addDoc,
    doc,
    updateDoc,
    getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 11 stages
const stages = [
    0, // zero
    60, // 1 minutes
    120, // 2 minutes
    300, // 5 minutes
    1800, // 30 minutes
    3600, // 1 hour
    26000, // 6 hour
    86400, // 1 day
    172800, // 2 days
    604800, // 7 days
    1209600, // 14 days
];

const cards = [];
let green = [],
    blue = [],
    yellow = [];

const numbers = document.getElementsByClassName("number");

[...numbers][0].innerHTML = localStorage.getItem("green")
    ? JSON.parse(localStorage.getItem("green")).length
    : "?";
[...numbers][1].innerHTML = localStorage.getItem("blue")
    ? JSON.parse(localStorage.getItem("blue")).length
    : "?";
[...numbers][2].innerHTML = localStorage.getItem("yellow")
    ? JSON.parse(localStorage.getItem("yellow")).length
    : "?";

let email = "";
onAuthStateChanged(auth, async (user) => {
    if (user) {
        email = user.email;

        const q = collection(db, email);
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            cards.push({ id: doc.id, data: doc.data() });
            console.log(
                doc.data().stage,
                stages[doc.data().stage],
                Timestamp.now().seconds -
                    (stages[doc.data().stage] + doc.data().time.seconds)
            );
            if (
                Timestamp.now().seconds -
                    (stages[doc.data().stage] + doc.data().time.seconds) >=
                0
            ) {
                green.push({ id: doc.id, data: doc.data() });
            } else {
                // Learned duration less than 7 days
                if (doc.data().stage < stages.length - 2) {
                    blue.push({ id: doc.id, data: doc.data() });
                } else {
                    yellow.push({ id: doc.id, data: doc.data() });
                }
            }
        });

        console.log(cards);

        [...numbers][0].innerHTML = green.length;
        [...numbers][1].innerHTML = blue.length;
        [...numbers][2].innerHTML = yellow.length;

        localStorage.setItem("cards", JSON.stringify(cards));
        localStorage.setItem("green", JSON.stringify(green));
        localStorage.setItem("blue", JSON.stringify(blue));
        localStorage.setItem("yellow", JSON.stringify(yellow));
    }
});

// Translating
document.getElementById("word").onkeyup = () => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURI(
        document.getElementById("word").value
    )}`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json[0].map((item) => item[0]).join(""));
            document.getElementById("meaning").value = json[0]
                .map((item) => item[0])
                .join("");
        })
        .catch((error) => {
            console.log(error);
            return "";
        });
};

// Add word
document.getElementById("submit").onclick = async () => {
    const word = document.getElementById("word").value;
    const meaning = document.getElementById("meaning").value;
    const example = document.getElementById("example").value;

    if (word.trim() != "" && meaning.trim() != "") {
        document.getElementById("word").value = "";
        document.getElementById("meaning").value = "";
        document.getElementById("example").value = "";

        // let iconURL = "";

        // const url = `https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=flat+color+${word}&vector=1&count=1`;
        // try {
        //     const response = await fetch(url);
        //     const data = await response.json();

        //     if (response.ok)
        //         iconURL = data.icons[0].raster_sizes[6].formats[0].preview_url;
        // } catch (error) {
        //     console.error("Error:", error);
        // }

        await addDoc(collection(db, email), {
            word: word,
            meaning: meaning,
            example: example,
            // icon: iconURL,
            stage: 0,
            time: Timestamp.now(),
        }).then(function (docRef) {
            console.log(docRef);
            green.push({
                id: docRef.id,
                data: {
                    word: word,
                    meaning: meaning,
                    example: example,
                    // icon: iconURL,
                    stage: 0,
                    time: Timestamp.now(),
                },
            });
            [...numbers][0].innerHTML = green.length;

            localStorage.setItem("cards", JSON.stringify(cards));
            localStorage.setItem("green", JSON.stringify(green));
        });
    }
};

document.getElementById("add").onclick = () => {
    document.getElementById("add-menu").classList.toggle("show");
};

document.getElementById("close-add-menu").onclick = () => {
    document.getElementById("add-menu").classList.toggle("show");
};

// Time loop for 1 minutes to update cards'states
setInterval(() => {
    let i = 0;
    blue.forEach((blueCard) => {
        if (
            Timestamp.now().seconds -
                (stages[blueCard.data.stage] + blueCard.data.time.seconds) >=
            0
        ) {
            green.push(blueCard);
            console.log(
                blueCard,
                Timestamp.now().seconds,
                stages[blueCard.data.stage] + blueCard.data.time.seconds
            );
            blue.splice(i, 1);
        }
        i++;
    });

    i = 0;
    yellow.forEach((yellowCard) => {
        if (
            Timestamp.now().seconds -
                (stages[yellowCard.data.stage] +
                    yellowCard.data.time.seconds) >=
            0
        ) {
            green.push(yellowCard);
            yellow.splice(i, 1);
        }
        i++;
    });

    [...numbers][0].innerHTML = green.length;
    [...numbers][1].innerHTML = blue.length;
    [...numbers][2].innerHTML = yellow.length;
}, 2_000);

// Mange card and test
const card = document.querySelector(".card").children[0];

card.addEventListener("mousedown", function () {
    if (!card.classList.contains("is-flipped")) {
        card.classList.toggle("is-flipped");

        const back = card.getElementsByClassName("back")[0];
        back.style.color = "black";

        document.getElementById("speaker").onclick = () => {
            speaking(
                green[0].data.word +
                    (green[0].data.example
                        ? `... ${green[0].data.example}`
                        : ``)
            );
        };

        document.getElementById("document").onclick = () => {
            window.open(
                `https://dictionary.cambridge.org/spellcheck/english/?q=${green[0].data.word}`
            );
        };
    }
});

document.getElementById("close-test-menu").onclick = () => {
    document.getElementById("test-menu").classList.toggle("show");

    card.style = "";
    card.classList = "";
    revealed = false;
    direction = "none";
};

document.getElementById("start").onclick = () => {
    if (green.length != 0) {
        document.getElementById("test-menu").classList.toggle("show");

        // Shuffle cards
        green = green.sort((a, b) => 0.5 - Math.random());

        const front = card.getElementsByClassName("front")[0];
        const back = card.getElementsByClassName("back")[0];

        getCard(front, back);
    }
};

function getCard(front, back) {
    speaking(
        green[0].data.word +
            (green[0].data.example ? `... ${green[0].data.example}` : ``)
    );

    front.innerHTML = `
        <div>
            <h1>${green[0].data.word}</h1>
            ${green[0].data.example ? `<h3>${green[0].data.example}</h3>` : ``}
        </div>
    `;

    // back.innerHTML = `
    //     <div>
    //         ${green[0].data.icon ? `<img src="${green[0].data.icon}">` : ``}
    //         <h3>${green[0].data.word}</h3>
    //         <h1>${green[0].data.meaning}</h1>
    //         ${green[0].data.example ? `<h3>${green[0].data.example}</h3>` : ``}
    //         <p id="right">Đã nhớ</p>
    //         <p id="wrong">Học lại</p>
    //     </div>
    // `;

    back.innerHTML = `
        <div>
            <h3>${green[0].data.word}</h3>
            <h1>${green[0].data.meaning}</h1>
            ${green[0].data.example ? `<h3>${green[0].data.example}</h3>` : ``}
            <hr>
            <span class="material-symbols-outlined" id="speaker">brand_awareness</span>
            <span class="material-symbols-outlined" id="document">description</span>
            <p id="right">Đã nhớ</p>
            <p id="wrong">Học lại</p>
        </div>
    `;
}

// Drag card
let revealed = false;
let direction = "none";
card.addEventListener(
    "transitionend",
    function () {
        revealed = true;
    },
    false
);

dragElement(card);

function dragElement(element) {
    let initialX = null,
        initialY = null;

    element.addEventListener("mousedown", dragStart, false);
    element.addEventListener("touchstart", dragStart, false);

    function dragStart(e) {
        if (revealed) {
            initialX =
                e.clientX === undefined ? e.touches[0].clientX : e.clientX;
            initialY =
                e.clientY === undefined ? e.touches[0].clientY : e.clientY;
            document.addEventListener("mousemove", dragMove, false);
            document.addEventListener("touchmove", dragMove, false);
            document.addEventListener("mouseup", dragEnd, false);
            document.addEventListener("touchend", dragEnd, false);
        }
    }

    function dragMove(e) {
        if (revealed) {
            if (initialX === null || initialY === null) return;

            const currentX =
                e.clientX === undefined ? e.touches[0].clientX : e.clientX;
            const currentY =
                e.clientY === undefined ? e.touches[0].clientY : e.clientY;

            const deltaX = currentX - initialX;
            const deltaY = currentY - initialY;

            initialX = currentX;
            initialY = currentY;

            element.style.top = element.offsetTop + deltaY + "px";
            element.style.left = element.offsetLeft + deltaX + "px";

            // Rotate card when dragged
            const rad = element.style.left.slice(0, -2) / window.innerWidth;
            element.style.transform = "rotate(" + -rad + "rad) rotateY(180deg)";

            // Check if card is dragged to the right or left or middle
            if (
                element.style.left.slice(0, -2) >
                (window.innerWidth * 15) / 100
            ) {
                direction = "right";
                document.getElementById("right").style.display = "initial";
            } else if (
                element.style.left.slice(0, -2) <
                (-window.innerWidth * 15) / 100
            ) {
                direction = "left";
                document.getElementById("wrong").style.display = "initial";
            } else {
                direction = "none";
                document.getElementById("right").style.display = "none";
                document.getElementById("wrong").style.display = "none";
            }
        }
    }

    function dragEnd() {
        initialX = null;
        initialY = null;

        // When release, check if card is dragged to the side
        // If in the middle, move it back to the center
        if ("none" == direction) {
            element.style.top = 0;
            element.style.left = 0;
            element.style.transform = "rotate(0rad) rotateY(180deg)";
        } else {
            // Stop any card to continue talking
            speechSynthesis.cancel();
            // If correct
            if ("right" == direction) {
                // Update card stage
                updateDoc(doc(db, email, green[0].id), {
                    stage: Math.min(Math.max(green[0].data.stage + 1, 0), 9),
                    time: Timestamp.now(),
                });
                green[0].data.stage = Math.min(
                    Math.max(green[0].data.stage + 1, 0),
                    9
                );
                green[0].data.time = Timestamp.now();
                if (green[0].data.stage <= stages.length - 3) {
                    blue.push(green.shift());
                } else {
                    yellow.push(green.shift());
                }
            }
            // If wrong
            else if ("left" == direction) {
                // Update card stage

                // green[0].data.stage = Math.min(
                //     Math.max(green[0].data.stage - 1, 0),
                //     4
                // );
                green[0].data.stage = 0;
                updateDoc(doc(db, email, green[0].id), {
                    stage: green[0].data.stage,
                    time: Timestamp.now(),
                });

                green[0].data.time = Timestamp.now();
                if (green[0].data.stage != 0) {
                    blue.push(green.shift());
                } else {
                    green.push(green.shift());
                }
            }

            // Update number display
            [...numbers][0].innerHTML = green.length;
            [...numbers][1].innerHTML = blue.length;
            [...numbers][2].innerHTML = yellow.length;

            localStorage.setItem("green", JSON.stringify(green));
            localStorage.setItem("blue", JSON.stringify(blue));
            localStorage.setItem("yellow", JSON.stringify(yellow));

            // Unflipped the card
            element.style = "";
            card.classList = "";
            revealed = false;
            direction = "none";
            document.getElementById("right").style.display = "none";
            document.getElementById("wrong").style.display = "none";

            const front = card.getElementsByClassName("front")[0];
            const back = card.getElementsByClassName("back")[0];

            // Prevent user from seeing the answer
            back.style.color = "white";

            // Get new card
            if (green.length != 0) {
                getCard(front, back);
            } else {
                // If no card left
                document.getElementById("test-menu").classList.toggle("show");
            }
        }

        document.removeEventListener("mousemove", dragMove, false);
        document.removeEventListener("touchmove", dragMove, false);
        document.removeEventListener("mouseup", dragEnd, false);
        document.removeEventListener("touchend", dragEnd, false);
    }
}

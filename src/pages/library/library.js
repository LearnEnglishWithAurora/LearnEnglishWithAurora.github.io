import "./library.css";
import "/index.css";
import "/pages/home/home.css";

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

const categories = ["Art", "Geography", "History", "Science", "Sports"];
const numbers = {
    Art: 50,
    Geography: 25,
    History: 21,
    Science: 31,
    Sports: 50,
};
let paragraphs = {};

function getWikipediaArticle(category) {
    const categoryUrl = `https://simple.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&list=categorymembers&cmlimit=${numbers[category]}&cmtitle=Category:${category}`;

    fetch(categoryUrl)
        .then((response) => response.json())
        .then((data) => {
            const random = Math.floor(
                Math.random() * data.query.categorymembers.length
            );
            console.log(
                data.query.categorymembers,
                data.query.categorymembers[random]
            );

            const pageTitle = data.query.categorymembers[random].title;
            let pageID = "";

            const pageUrl = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${pageTitle}`;
            let pageContent = "";

            fetch(pageUrl)
                .then((response) => response.json())
                .then((data) => {
                    pageID = Object.keys(data.query.pages)[0];
                    pageContent = data.query.pages[pageID].extract;
                    console.log(data.query.pages[pageID].extract);
                    paragraphs[category] = data.query.pages[pageID].extract;
                });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

categories.forEach((category) => {
    getWikipediaArticle(category);
});

const popup = document.getElementById("reading-menu");

categories.forEach((category) => {
    document.getElementById(category).onclick = () => {
        popup.classList.add("show");
        document.getElementById("paragraph-holder").innerHTML =
            paragraphs[category];
    };
});

document.getElementById("close-reading-menu").onclick = () => {
    popup.classList.remove("show");
};

const units = {
    "unit-1": [
        ["artisan", "nghệ nhân"],
        ["community", "cộng đồng"],
        ["craft village", "làng nghề thủ công"],
        ["handicraft", "sản phẩm thủ công"],
        ["original", "nguyên bản"],
    ],
    "unit-2": [
        ["bustling", "hối hả"],
        ["downtown", "khu trung tâm"],
        ["tram", "xe điện"],
        ["congested", "ùn tắc giao thông"],
        ["process", "xử lí"],
    ],
    "unit-3": [
        ["accomplish", "đạt được"],
        ["delay", "chậm trễ"],
        ["priority", "ưu tiên"],
        ["stressed out", "căng thẳng"],
        ["due date", "hạn chót"],
    ],
    "unit-4": [
        ["ancient", "cổ đại"],
        ["anniversary", "lễ kỉ niệm"],
        ["lâu đài", "castle"],
        ["basic", "căn bản"],
        ["found", "thành lập"],
    ],
    "unit-5": [
        ["amazing", "tuyệt vời"],
        ["army-like", "như trong quân đội"],
        ["brilliant", "rất thông minh"],
        ["campus", "khuôn viên trường đại học"],
        ["confidence", "sự tự tin"],
        ["coral reef", "rặng san hô"],
        ["eco-tour", "du lịch sinh thái"],
        ["embrassing", "làm ngượng ngùng, bối rối"],
        ["exhilarating", "đầy phấn khích"],
        ["experience", "trải nghiệm, kinh nghiệm"],
    ],
};

for (let i = 1; i <= 5; i++) {
    console.log("unit-" + i);
    document.getElementById("unit-" + i).onclick = () => {
        addCards("unit-" + i);
        console.log("!");
    };
}

let email = "";
onAuthStateChanged(auth, async (user) => {
    if (user) {
        email = user.email;
    }
});

async function addCards(unit) {
    units[unit].forEach(async (card) => {
        await addDoc(collection(db, email), {
            word: card[0],
            meaning: card[1],
            example: "",
            stage: 0,
            time: Timestamp.now(),
        });
    });
}

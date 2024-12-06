import "./library.css";
import "/index.css";
import "/pages/home/home.css";

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

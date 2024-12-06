import "/index.css";

function translate(text) {
    if (text != "") {
        const inputLanguage = "en";
        const outputLanguage = "vi";
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
            text
        )}`;

        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json[0].map((item) => item[0]).join(""));
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function getSelectedText() {
    var selectedText = "";
    var selectedSentence = "";

    if (window.getSelection) {
        selectedText = window.getSelection();
    } else if (document.getSelection) {
        selectedText = document.getSelection();
    } else if (document.selection) {
        selectedText = document.selection.createRange().text;
    } else return "";

    if (selectedText.rangeCount === 0) {
        return "";
    }

    const range = selectedText.getRangeAt(0);
    const parentElement = range.commonAncestorContainer;

    const textContent = parentElement.textContent || parentElement.innerText;
    const sentences = textContent.split(/[.?!]/);
    for (const sentence of sentences) {
        if (sentence.includes(selectedText)) {
            selectedSentence = sentence;
            break;
        }
    }

    return [selectedText, selectedSentence];
}

onmouseup = () => {
    let [selectedText, selectedSentence] = getSelectedText();
    translate(selectedText);
};

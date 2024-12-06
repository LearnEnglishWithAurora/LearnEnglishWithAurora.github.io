import "/index.css";

function filterAvailableVoices(jsonData) {
    if (!jsonData) return [];

    const availableVoices = [];
    const voices = window.speechSynthesis.getVoices();

    jsonData.voices.forEach(function (voice) {
        if (voices.some((apiVoice) => apiVoice.name === voice.name)) {
            availableVoices.push(voice);
        } else {
            if (voice.altNames) {
                voice.altNames.forEach(function (altName) {
                    if (voices.some((apiVoice) => apiVoice.name === altName)) {
                        voice.name = altName;
                        availableVoices.push(voice);
                    }
                });
            }
        }
    });

    return availableVoices;
}

async function loadJSONData(url) {
    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error("Error loading JSON data:", error);
        return null;
    }
}

async function trying() {
    const jsonData = await loadJSONData(
        "https://hadriengardeur.github.io/web-speech-recommended-voices/json/en.json"
    );

    const availableVoices = filterAvailableVoices(jsonData);
    console.log(availableVoices, jsonData, window.speechSynthesis.getVoices());

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    for (const voice of voices) {
        if (voice.name === availableVoices[0].name) {
            msg.voice = voice;
            console.log(voice);
        }
    }
    msg.volume = 1; // From 0 to 1
    msg.rate = 1; // From 0.1 to 10
    msg.pitch = 2; // From 0 to 2
    msg.text = "Hello! My name is Karl";
    msg.lang = "en";
    speechSynthesis.speak(msg);

    console.log(voices);
}

document.getElementById("test").onclick = trying;

console.log(window.speechSynthesis.getVoices());
// setTimeout(() => {
//     console.log(window.speechSynthesis.getVoices());
// }, 100);

// import {
//     pipeline,
//     env,
// } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2";

// env.allowLocalModels = false;
// env.allowRemoteModels = true;
// env.useBrowserCache = false;

// // const generator = await pipeline(
// //     "text2text-generation",
// //     "Xenova/LaMini-Flan-T5-783M"
// // );
// // const output = await generator("how can I become more healthy?", {
// //     max_new_tokens: 100,
// // });

// const classifier = await pipeline("sentiment-analysis");
// console.log("!");
// const output = await classifier("I love transformers!");
// console.log(output);

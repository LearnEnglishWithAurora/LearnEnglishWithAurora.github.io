let jsonData, availableVoices, chosenVoice;

async function loading() {
    jsonData = await loadJSONData(
        "https://hadriengardeur.github.io/web-speech-recommended-voices/json/en.json"
    );
    availableVoices = filterAvailableVoices(jsonData);

    var voices = window.speechSynthesis.getVoices();
    for (const voice of voices) {
        if (voice.name === availableVoices[0].name) {
            chosenVoice = voice;
            console.log(chosenVoice);
            break;
        }
    }
}
loading();

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

function filterAvailableVoices(jsonData) {
    if (!jsonData) return [];

    const availableVoices = [];
    const voices = window.speechSynthesis.getVoices();

    const nativeVoices = voices.filter(
        (voice) => voice.name.includes("Google") == false
    );

    if (nativeVoices.length != 0) jsonData.voices = nativeVoices;

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

export async function speaking(text) {
    var msg = new SpeechSynthesisUtterance();
    msg.voice = chosenVoice;
    msg.volume = 1;
    msg.rate = 1;
    msg.text = text;
    msg.lang = "en";
    speechSynthesis.speak(msg);
}

console.log(window.speechSynthesis.getVoices());

import "/index.css";
import "./main.css";

// // https://api.dictionaryapi.dev/api/v2/entries/en/metropolitan

// async function loadJSONData(url) {
//     try {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         // console.log(jsonData);
//         return jsonData;
//     } catch (error) {
//         console.error("Error loading JSON data:", error);
//         return null;
//     }
// }

// async function test(word) {
//     const data = await loadJSONData(
//         `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//     );

//     data.forEach((word) => {
//         if (word.meanings && word.sourceUrls.length == 1) {
//             console.log(word.meanings, word.sourceUrls.length);
//         }
//     });
// }

function cleanString(str, filter) {
    return str.replaceAll(filter, "").replaceAll("&nbsp;", " ");
}

async function test(word) {
    let url = `https://en.wiktionary.org/api/rest_v1/page/definition/${word}`;
    let filter = new RegExp(
        '< *\\/? *[a-z]+ *( [a-z]+="[^<>"]+" *)* *\\/? *>|<[^>]*>|\n.*|Alternative spelling of.*',
        "ig"
    );
    let resObj = await fetch(url);
    let res = await resObj.json();

    // console.log(res);
    let output = `<h1>${word}</h1>`;
    let definitions = "";
    for (let meaning of res.en) {
        // console.log(meaning)
        for (let definition of meaning.definitions) {
            if (definition.definition) {
                let filteredDefinition = cleanString(
                    definition.definition,
                    filter
                );
                definitions += filteredDefinition;

                output += `\n<p>${filteredDefinition}</p>`;
                // console.log(filteredDefinition);
                // console.log(jsonData[0].map((item) => item[0]).join(""));
                if (definition.examples) {
                    for (let example of definition.examples) {
                        let filteredExample = cleanString(example, filter);
                        // output += `\n    "${filteredExample}"`;
                        console.log(filteredExample);
                    }
                }
            }
        }
    }
    console.log(definitions);
    // const translatedData = await fetch(
    //     `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURI(
    //         definitions
    //     )}`
    // );
    // const jsonData = await translatedData.json();
    // output += `\n<p>${jsonData[0].map((item) => item[0]).join("")}</p>`;

    document.getElementById("content").innerHTML = output;
}

// test("hello");
test("bear");

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


function addExcitement(theWordArray) {

    let buildMeUp = ""
    let symbol = "?"

    for (let i = 0; i < theWordArray.length; i++) {
        // "sentence[i]" can also be "thewordarray[i]"
        if (i % 12 === 3) {
            buildMeUp += (`${theWordArray[i]}${symbol} `);
            console.log(buildMeUp);
        }
        else if (i % 12 === 6) {
            buildMeUp += (`${theWordArray[i]}${symbol} `);
            console.log(buildMeUp);
        }
        else if (i % 12 === 9) {
            buildMeUp += (`${theWordArray[i]}${symbol} `);
            console.log(buildMeUp);
        } else {
            buildMeUp += (`${theWordArray[i]} `);
            console.log(buildMeUp);
        }
    }
}
addExcitement(sentence)
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];


function addExcitement(theWordArray) {

    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // "sentence[i]" can also be "thewordarray[i]"
        if (i % 12 === 3) {
            buildMeUp += sentence[i] + "! ";
            console.log(buildMeUp);
        }
        else if (i % 12 === 6) {
            buildMeUp += sentence[i] + "! ";
            console.log(buildMeUp);
        }
        else if (i % 12 === 9) {
            buildMeUp += sentence[i] + "! ";
            console.log(buildMeUp);
        } else {
            buildMeUp += sentence[i] + " ";
            console.log(buildMeUp);
        }
    }
}
addExcitement(sentence)
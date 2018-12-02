let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray) {

    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        buildMeUp += theWordArray[i] + " ";  
        console.log(buildMeUp);
    }
}

addExcitement(sentence)
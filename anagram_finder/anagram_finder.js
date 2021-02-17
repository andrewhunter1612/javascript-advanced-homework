
const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    wordLetters = {}
    otherWordLetters = {}
    let word = "this is a word i o d d d d "
    let otherWords = "ddddd this is a wor i o"
    for (let letter of word.replace(/\s+/g, '').split('')){
        console.log(letter);

        if (wordLetters[letter] !== undefined){
            wordLetters[letter] += 1
        } else {
            wordLetters[letter] = 1
        }
    }

    for (let letter of otherWords.replace(/\s+/g, '').split('')){
        if (otherWordLetters[letter] !== undefined){
            otherWordLetters[letter] += 1
        } else {
            otherWordLetters[letter] = 1
        }
    }

    sortedWordLetters = Object.keys(wordLetters).sort().reduce((acc, key) => ({
        ...acc, [key]:wordLetters[key]
    }), {})

    sortedSecondWordLetters = Object.keys(otherWordLetters).sort().reduce((acc, key) => ({
        ...acc, [key]:otherWordLetters[key]
    }), {})

    console.log(sortedWordLetters)
    console.log(sortedSecondWordLetters);

    // if (sortedWordLetters === sortedSecondWordLetters){
    //     console.log("complete");
    // } else {
    //     console.log("not complete");
    // }
}

module.exports = AnagramFinder;

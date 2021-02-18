
const AnagramFinder = function (word) {
    this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWordsArray) {
    wordLetters = {}
    otherWordLetters = {}
    for (p=0; p<otherWordsArray.length;p++){
        otherWords = otherWordsArray[p]
        for (let letter of this.word.toLowerCase().replace(/\s+/g, '').split('')){
            if (wordLetters[letter] !== undefined){
                wordLetters[letter] += 1
            } else {
                wordLetters[letter] = 1
            }
        }

        for (let letter of otherWords.toLowerCase().replace(/\s+/g, '').split('')){
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
        sortedWordFull = ""
        secondSortedWordFull = ""
        for (let key in sortedWordLetters){
            for (let l = 0; l<sortedWordLetters[key];l++){
                sortedWordFull += key
            }
        }



        sortedValues = Object.values(wordLetters).sort().reduce((accumulated, value) => ({
            ...accumulated, [value]: wordLetters[value]
        }), {})

        console.log(sortedValues);

        for (let key in sortedSecondWordLetters){
            for (let i = 0; i<sortedSecondWordLetters[key];i++){
                secondSortedWordFull += key
            }
        }

        if (sortedWordFull === secondSortedWordFull){
            // console.log(sortedWordFull);
            // console.log(secondSortedWordFull);
            return true
            //in reality, would say something like otherword is/isn't an anagram of word
        } else {
            // console.log(sortedWordFull);
            // console.log(secondSortedWordFull);
            return false
        }
    }
}

module.exports = AnagramFinder;

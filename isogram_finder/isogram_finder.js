const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
    // for (let i = 0; i<this.word.length; i++){
    //     let currentLetter = this.word[i].toLowerCase()
    //     for (let j = i+1; j<this.word.length; j++){
    //         let secondLetter = this.word[j].toLowerCase()
    //         if (currentLetter === secondLetter){
    //             return false
    //         }
    //     }
    // }
    // return true

    const numberOfLetters = this.word.split('').filter((letter) => {
        return 
    }).
    
}


module.exports = IsogramFinder;

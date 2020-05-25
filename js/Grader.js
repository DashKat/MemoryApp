function grade() {
    var numbers = JSON.parse(localStorage.getItem("numbers"));
    localStorage.removeItem("numbers");
    var names = JSON.parse(localStorage.getItem("names"));
    localStorage.removeItem("names");
    var sentences = JSON.parse(localStorage.getItem("sentences"));
    localStorage.removeItem("sentences");
    var cardSuits = JSON.parse(localStorage.getItem("cardSuits"));
    localStorage.removeItem("cardSuits");
    var cardNums = JSON.parse(localStorage.getItem("cardNums"));
    localStorage.removeItem("cardNums");

    var userNumbers = JSON.parse(localStorage.getItem("userNumbers"));
    localStorage.removeItem("userNumbers");
    var userNames = JSON.parse(localStorage.getItem("userNames"));
    localStorage.removeItem("userNames");
    var userSentences = JSON.parse(localStorage.getItem("userSentences"));
    localStorage.removeItem("userSentences");
    
    var numberScore = 0;
    var nameScore = 0;
    var sentenceScore = 0;

    for(var i = 0; i < numbers.length; i++) {
        for(var j = 0; j < userNumbers.length; j++) {
            if(numbers[i] == userNumbers[j] && i == j) {
                numberScore++;
            }
        }
    }

    for(var i = 0; i < names.length; i++) {
        for(var j = 0; j < userNames.length; j++) {
            if(names[i] == userNames[j] && i == j) {
                nameScore++;
            }
        }
    }

    for(var i = 0; i < sentences.length; i++) {
        for(var j = 0; j < userSentences.length; j++) {
            if(sentences[i] == userSentences[j] && i == j) {
                sentenceScore++;
            }
        }
    }

    document.getElementById("Score").innerHTML = (numberScore + nameScore + sentenceScore).toString();
}
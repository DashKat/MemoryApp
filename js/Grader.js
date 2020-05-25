function grade() {
    var numbers = JSON.parse(localStorage.getItem("numbers"));
    localStorage.removeItem("numbers");
    var names = JSON.parse(localStorage.getItem("names"));
    localStorage.removeItem("names");
    var sentences = JSON.parse(localStorage.getItem("sentences"));
    localStorage.removeItem("sentences");
    var cards = JSON.parse(localStorage.getItem("cards"));
    localStorage.removeItem("cards");

    var userNumbers = JSON.parse(localStorage.getItem("userNumbers"));
    localStorage.removeItem("userNumbers");
    var userNames = JSON.parse(localStorage.getItem("userNames"));
    localStorage.removeItem("userNames");
    var userSentences = JSON.parse(localStorage.getItem("userSentences"));
    localStorage.removeItem("userSentences");
    var userCards = JSON.parse(localStorage.getItem("userCards"));
    localStorage.removeItem("userCards");
    
    var numberScore = 0;
    var nameScore = 0;
    var sentenceScore = 0;
    var cardScore = 0;

    var possibleScore = 0;

    for(var i = 0; i < numbers.length; i++) {
        var table = document.getElementById('realNumberDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = numbers[i]
        for(var j = 0; j < userNumbers.length; j++) {
            if(numbers[i] == userNumbers[j] && i == j) {
                numberScore++;
            }

            var table = document.getElementById('userNumberDisplay');
            var row = table.insertRow(table.rows.length);
            var cell = row.insertCell(0);
            cell.innerHTML = userNumbers[j];
        }
        possibleScore++;
    }

    for(var i = 0; i < names.length; i++) {
        var table = document.getElementById('realNameDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = names[i];
        for(var j = 0; j < userNames.length; j++) {
            if(names[i] == userNames[j] && i == j) {
                nameScore++;
            }

            var table = document.getElementById('userNameDisplay');
            var row = table.insertRow(table.rows.length);
            var cell = row.insertCell(0);
            cell.innerHTML = userNames[j];
        }
        possibleScore++;
    }

    for(var i = 0; i < sentences.length; i++) {
        var table = document.getElementById('realSentenceDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = sentences[i];

        for(var j = 0; j < userSentences.length; j++) {
            if(sentences[i].toUpperCase() == userSentences[j].toUpperCase() && i == j) {
                sentenceScore++;
            }

            var table = document.getElementById('userSentenceDisplay');
            var row = table.insertRow(table.rows.length);
            var cell = row.insertCell(0);
            cell.innerHTML = userSentences[j];
        }
        possibleScore++;
    }

    for(var i = 0; i < cards.length; i++) {
        var table = document.getElementById('realCardDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = cards[i];

        for(var j = 0; j < userCards.length; j++) {
            if(cards[i].toUpperCase() == userCards[j].toUpperCase() && i == j) {
                cardScore++;
            }

            var table = document.getElementById('userCardDisplay');
            var row = table.insertRow(table.rows.length);
            var cell = row.insertCell(0);
            cell.innerHTML = userCards[j];
        }
        possibleScore++;
    }


    document.getElementById("Score").innerHTML = (numberScore + nameScore + sentenceScore + cardScore).toString() + "/" + possibleScore.toString();
}
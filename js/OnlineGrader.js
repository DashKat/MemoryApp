function grade() {
    var firebaseConfig = {
        apiKey: "AIzaSyDpREM9IPNuoVLjX0Yv74IA5f9aUnysK-U",
        authDomain: "memoryapp-69da9.firebaseapp.com",
        databaseURL: "https://memoryapp-69da9.firebaseio.com",
        projectId: "memoryapp-69da9",
        storageBucket: "memoryapp-69da9.appspot.com",
        messagingSenderId: "315432298371",
        appId: "1:315432298371:web:df4285484600df6af438b6"
    };
    try {firebase.initializeApp(firebaseConfig);}
    catch {}
    var database = firebase.database();
    var ID = localStorage.getItem('clientID');
    var clientName = localStorage.getItem('clientName');
    
    database.ref().child('GameInfo/' + ID).once('value').then(function(snapshot) {
        localStorage.setItem('numbers', snapshot.val().numbers);
        localStorage.setItem('names', snapshot.val().names);
        localStorage.setItem('sentences', snapshot.val().sentences);
        localStorage.setItem('cardsGrade', snapshot.val().cardsGrade);
    });

    var numbers = JSON.parse(localStorage.getItem("numbers"));
    localStorage.removeItem("numbers");
    var names = JSON.parse(localStorage.getItem("names"));
    localStorage.removeItem("names");
    var sentences = JSON.parse(localStorage.getItem("sentences"));
    localStorage.removeItem("sentences");
    var cards = JSON.parse(localStorage.getItem("cardsGrade"));
    localStorage.removeItem("cards");

    var userNumbers = JSON.parse(localStorage.getItem("userNumbers"));
    if(userNumbers.length == null) {
        userNumbers.push(" ");
    }
    localStorage.removeItem("userNumbers");
    var userNames = JSON.parse(localStorage.getItem("userNames"));
    if(userNames.length == null) {
        userNames.push(" ");
    }
    localStorage.removeItem("userNames");
    var userSentences = JSON.parse(localStorage.getItem("userSentences"));
    if(userSentences.length == null) {
        userSentences.push(" ");
    }
    localStorage.removeItem("userSentences");
    var userCards = JSON.parse(localStorage.getItem("userCards"));
    if(userCards.length == null) {
        userCards.push(" ");
    }
    localStorage.removeItem("userCards");


    var numberScore = 0;
    var nameScore = 0;
    var sentenceScore = 0;
    var cardScore = 0; 
    var possibleScore = 0;

    for(var j = 0; j < userNumbers.length; j++) {
        var table = document.getElementById('userNumberDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userNumbers[j];
    }

    for(var j = 0; j < userNames.length; j++) {
        var table = document.getElementById('userNameDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userNames[j];
    }

    for(var j = 0; j < userSentences.length; j++) {
        var table = document.getElementById('userSentenceDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userSentences[j];
    }

    for(var j = 0; j < userCards.length; j++) {
        var table = document.getElementById('userCardDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userCards[j];
    }

    for(var i = 0; i < numbers.length; i++) {
        var table = document.getElementById('realNumberDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = numbers[i]
        for(var j = 0; j < userNumbers.length; j++) {
            if(numbers[i] == userNumbers[j] && i == j) {
                numberScore++;
            }
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
        }
        possibleScore++;
    }


    document.getElementById("Score").innerHTML = (numberScore + nameScore + sentenceScore + cardScore).toString() + "/" + possibleScore.toString();

    database.ref().child('ClientScores/' + ID + '/' + clientName).set({
        value: ((numberScore + nameScore + sentenceScore + cardScore).toString() + "/" + possibleScore.toString())
    });
}
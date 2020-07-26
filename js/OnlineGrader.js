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
    var ID = sessionStorage.getItem('clientID');
    var clientName = sessionStorage.getItem('clientName');
    
    database.ref().child('GameInfo/' + ID).once('value').then(function(snapshot) {
        sessionStorage.setItem('numbers', snapshot.val().numbers);
        sessionStorage.setItem('names', snapshot.val().names);
        sessionStorage.setItem('sentences', snapshot.val().sentences);
        sessionStorage.setItem('cardsGrade', snapshot.val().cardsGrade);
    });

    var numbers = JSON.parse(sessionStorage.getItem("numbers"));
    sessionStorage.removeItem("numbers");
    var names = JSON.parse(sessionStorage.getItem("names"));
    sessionStorage.removeItem("names");
    var sentences = JSON.parse(sessionStorage.getItem("sentences"));
    sessionStorage.removeItem("sentences");
    var cards = JSON.parse(sessionStorage.getItem("cardsGrade"));
    sessionStorage.removeItem("cardsGrade");

    var userNumbers = JSON.parse(sessionStorage.getItem("userNumbers"));
    if(userNumbers.length == null) {
        userNumbers.push(" ");
    }
    sessionStorage.removeItem("userNumbers");
    var userNames = JSON.parse(sessionStorage.getItem("userNames"));
    if(userNames.length == null) {
        userNames.push(" ");
    }
    sessionStorage.removeItem("userNames");
    var userSentences = JSON.parse(sessionStorage.getItem("userSentences"));
    if(userSentences.length == null) {
        userSentences.push(" ");
    }
    sessionStorage.removeItem("userSentences");
    var userCards = JSON.parse(sessionStorage.getItem("userCards"));
    if(userCards.length == null) {
        userCards.push(" ");
    }
    sessionStorage.removeItem("userCards");


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

        if (userNumbers[j] == numbers[j]) {
            cell.style.color = 'green';
        }

        else {
            cell.style.color = 'red';
        }
    }

    for(var j = 0; j < userNames.length; j++) {
        var table = document.getElementById('userNameDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userNames[j];

        if (userNames[j].toUpperCase() == names[j].toUpperCase()) {
            cell.style.color = 'green';
        }

        else {
            cell.style.color = 'red';
        }
    }

    for(var j = 0; j < userSentences.length; j++) {
        var table = document.getElementById('userSentenceDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userSentences[j];

        if (userSentences[j].toUpperCase() == sentences[j].toUpperCase()) {
            cell.style.color = 'green';
        }

        else {
            cell.style.color = 'red';
        }
    }

    for(var j = 0; j < userCards.length; j++) {
        var table = document.getElementById('userCardDisplay');
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = userCards[j];

        if (userCards[j].toUpperCase() == cards[j].toUpperCase()) {
            cell.style.color = 'green';
        }

        else {
            cell.style.color = 'red';
        }
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
            if(names[i].toUpperCase() == userNames[j].toUpperCase() && i == j) {
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

    var totalScore = (numberScore + nameScore + sentenceScore + cardScore);
    var scoreRatio = totalScore/possibleScore;
    var scoreVal = totalScore.toString() + "/" + possibleScore.toString();
    var scoreMessage;
    if(scoreRatio >= 0.5) {
        scoreMessage = "You got " + scoreVal + " right. Great Job!"
    }

    else {
        scoreMessage = "You got " + scoreVal + " right. Maybe try again?"
    }

    document.getElementById("Score").innerHTML = scoreMessage;

    console.log(clientName);
    database.ref().child('ClientScores/' + ID + '/' + clientName).set({
        value: ((numberScore + nameScore + sentenceScore + cardScore).toString() + "/" + possibleScore.toString())
    });
}
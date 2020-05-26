function updateRands() {
    SentenceUpdate();
    NumberUpdate();
    NameUpdate();
    CardUpdate();
}

function createGame() {
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

    var currentGamesRef = database.ref('CurrentGames');
    var thisGame = currentGamesRef.push();
    var thisGameID = thisGame.toString();


    var numTimes = document.getElementById('numTimes').value;
    var timeDuring = (parseInt(document.getElementById('timeDuring').value, 10) * 1000).toString();
    var timeBetween = (parseInt(document.getElementById('timeBetween').value, 10) * 1000).toString();
    var numbers = [];
    var names = [];
    var sentences = [];
    var cards = [];
    localStorage.setItem("numbers", JSON.stringify(numbers));
    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("sentences", JSON.stringify(sentences));
    localStorage.setItem("cards", JSON.stringify(cards));

    var x = 0;
    var intSet = setInterval(function() {
        if(x == numTimes) {
            thisGame.set({
                sentences: localStorage.getItem('sentences'),
                names: localStorage.getItem('names'),
                numbers: localStorage.getItem('numbers'),
                cards: localStorage.getItem('cards'),
                numTimes: numTimes,
                timeDuring: timeDuring,
                timeBetween: timeBetween
            });
            clearInterval(intSet);
        }
        else if(x != numTimes) {
            updateRands();
            x++;
        }
    }, 1);
}
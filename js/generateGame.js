function updateRands() {
    SentenceUpdate();
    NumberUpdate();
    NameUpdate();
    CardUpdate();
}

function generateGame() {
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

    if(document.getElementById('timeDuring').value != "" && document.getElementById('timeBetween').value != "" && document.getElementById('numTimes').value != "") {
        if(document.getElementById('timeDuring').value != "0" && document.getElementById('timeBetween').value != "0" && document.getElementById('numTimes').value != "0") {
            var gameInfoRef = database.ref('GameInfo');
            var thisGame = gameInfoRef.push();
            var thisGameID = thisGame.toString().slice(thisGame.toString().indexOf("GameInfo/") + 9, thisGame.toString().length);
            sessionStorage.setItem('SuperID', thisGameID);


            var numTimes = document.getElementById('numTimes').value;
            var timeDuring = (parseInt(document.getElementById('timeDuring').value, 10) * 1000).toString();
            var timeBetween = (parseInt(document.getElementById('timeBetween').value, 10) * 1000).toString();
            var numbers = [];
            var names = [];
            var sentences = [];
            var cards = [];
            var cardsGrade = [];
            var ClientNames = [];
            sessionStorage.setItem("numbers", JSON.stringify(numbers));
            sessionStorage.setItem("names", JSON.stringify(names));
            sessionStorage.setItem("sentences", JSON.stringify(sentences));
            sessionStorage.setItem("cards", JSON.stringify(cards));
            sessionStorage.setItem("cardsGrade", JSON.stringify(cardsGrade));

            var x = 0;
            var intSet = setInterval(function() {
                if(x == numTimes) {
                    thisGame.set({
                        sentences: sessionStorage.getItem('sentences'),
                        names: sessionStorage.getItem('names'),
                        numbers: sessionStorage.getItem('numbers'),
                        cards: sessionStorage.getItem('cards'),
                        cardsGrade: sessionStorage.getItem('cardsGrade'),
                        numTimes: numTimes,
                        timeDuring: timeDuring,
                        timeBetween: timeBetween,
                        validCheck: true
                    });
                    database.ref('IsRunning/' + thisGameID).set({
                        value: false
                    });
                    database.ref('ClientNames/' + thisGameID).set({
                        value: JSON.stringify(ClientNames)
                    });
                    sessionStorage.setItem('gameID', thisGameID);
                    
                    clearInterval(intSet);
                    setTimeout(function() {location.href = 'onlineStart.html';}, 1000);
                }
                else if(x != numTimes) {
                    updateRands();
                    x++;
                }
            }, 1);
        }

        else {
            alert("Please do not fill out the form with any zeros")
        }
    }

    else {
        alert("Please fill out all of the fields with numerical values");
    }
}

function startGame() {
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

    database.ref('IsRunning/' + sessionStorage.getItem('gameID')).set({
        value: true
    });

    setTimeout(function() {location.href = 'onlineSupervisor.html';}, 1000);
}


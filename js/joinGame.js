function join() {
    var clientNames = [];
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
    return database.ref('IsRunning/' + document.getElementById('joinGame').value + '/value').once('value').then(function(snapshot3) {
        return database.ref('GameInfo/' + document.getElementById('joinGame').value + "/validCheck").once('value').then(function(snapshot2) {
            
            if(snapshot2.val() == true && snapshot3.val() == false) {
                sessionStorage.setItem('clientID', document.getElementById('joinGame').value)
                var ID = sessionStorage.getItem('clientID');
                sessionStorage.setItem('clientName', document.getElementById('clientName').value.toString());
                database.ref().child('GameInfo/' + ID).once('value').then(function(snapshot) {
                    sessionStorage.setItem('numTimes', snapshot.val().numTimes);
                    sessionStorage.setItem('timeDuring', snapshot.val().timeDuring);
                    sessionStorage.setItem('timeBetween', snapshot.val().timeBetween);
                    sessionStorage.setItem('names', snapshot.val().names);
                    sessionStorage.setItem('numbers', snapshot.val().numbers);
                    sessionStorage.setItem('sentences', snapshot.val().sentences);
                    sessionStorage.setItem('cards', snapshot.val().cards);
                    sessionStorage.setItem('cardsGrade', snapshot.val().cardsGrade);
                });
                setTimeout(function() {location.href = 'onlineLobby.html';}, 500);
                database.ref().child('ClientNames/' + document.getElementById('joinGame').value + '/value').once('value').then(function(snapshot) {
                    clientNames = JSON.parse(snapshot.val());
                    
                    clientNames.push(document.getElementById('clientName').value.toString());
                    database.ref('ClientNames/' + document.getElementById('joinGame').value).set({
                        value: JSON.stringify(clientNames)
                    });
                });
            }

            else if(snapshot3.val() == true) {
                alert('Game has already begun. Please enter a valid game code');
            }

            else {
                alert('Please enter a valid game code');
            }
        });
    });
}
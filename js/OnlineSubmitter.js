window.onload = function() {
    const name = document.getElementById("nameIn");
    name.onkeyup =  function (e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            document.getElementById("namePlusBtn").click();
        }
    }

    const sentence = document.getElementById("sentenceIn");
    sentence.onkeyup =  function (e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            document.getElementById("sentencePlusBtn").click();
        }
    }

    const number = document.getElementById("numberIn");
    number.onkeyup =  function (e) {
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            document.getElementById("numberPlusBtn").click();
        }
    }
}

function plusName() {
    var table = document.getElementById('nameDisplay');

    var row = table.insertRow(table.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = document.getElementById('nameIn').value;
    document.getElementById('nameIn').value = "";
    document.querySelectorAll('table tr').forEach(function(e, i) {
        if (e.textContent.trim().length == 0) { // if row is empty
            e.parentNode.removeChild(e);
        }
    })
}


function minusName() {
    var rowID = sessionStorage.getItem('selectedRowName');
    try {
        document.getElementById('nameDisplay').deleteRow(parseInt(rowID, 10));
        sessionStorage.removeItem('selectedRowName');
    }
    catch {}
}

function plusSentence() {
    var table = document.getElementById('sentenceDisplay');
    var sentenceIn = document.getElementById('sentenceIn').value;
    sentenceIn = sentenceIn[0].toUpperCase() + sentenceIn.slice(1);
    var row = table.insertRow(table.rows.length);
    var cell = row.insertCell(0);
    
    if(sentenceIn[sentenceIn.length - 1] != "." && sentenceIn != "") {
        cell.innerHTML = sentenceIn + ".";
    }

    else {
        cell.innerHTML = sentenceIn;
    }

    document.getElementById('sentenceIn').value = "";
    document.querySelectorAll('table tr').forEach(function(e, i) {
        if (e.textContent.trim().length == 0) { // if row is empty
            e.parentNode.removeChild(e);
        }
    })
}

function minusSentence() {
    var rowID = sessionStorage.getItem('selectedRowSentence');
    try {
        document.getElementById('sentenceDisplay').deleteRow(parseInt(rowID, 10));
        sessionStorage.removeItem('selectedRowSentence');
    }
    catch {}
}

function plusNumber() {
    var table = document.getElementById('numberDisplay');

    var row = table.insertRow(table.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = document.getElementById('numberIn').value;
    document.getElementById('numberIn').value = "";
    document.querySelectorAll('table tr').forEach(function(e, i) {
        if (e.textContent.trim().length == 0) { // if row is empty
            e.parentNode.removeChild(e);
        }
    })
}

function minusNumber() {
    var rowID = sessionStorage.getItem('selectedRowNumber');
    try {
        document.getElementById('numberDisplay').deleteRow(parseInt(rowID, 10));
        sessionStorage.removeItem('selectedRowNumber');
    }
    catch {}
}

function plusCard() {
    var table = document.getElementById('cardDisplay');

    var row = table.insertRow(table.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = document.getElementById('cardNumber').value + " of " + document.getElementById('cardSuit').value;
    document.getElementById('cardNumber').value = 'emptyNum';
    document.getElementById('cardSuit').value = 'emptySuit';
    document.querySelectorAll('table tr').forEach(function(e, i) {
        if (e.textContent.trim().length == 0) { // if row is empty
            e.parentNode.removeChild(e);
        }
    })
}

function minusCard() {
    var rowID = sessionStorage.getItem('selectedRowCard');
    try {
        document.getElementById('cardDisplay').deleteRow(parseInt(rowID, 10));
        sessionStorage.removeItem('selectedRowCard');
    }
    catch {}
}


function submit() { 
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
    
    document.getElementById('namePlusBtn').click();
    document.getElementById('numberPlusBtn').click();
    document.getElementById('sentencePlusBtn').click();
    if(document.getElementById('cardNumber').value != "emptyNum") {document.getElementById('cardPlusBtn').click();}

    var nameCells = document.getElementById('nameDisplay').getElementsByTagName('td');
    var userNames = [];
    
    var sentenceCells = document.getElementById('sentenceDisplay').getElementsByTagName('td');
    var userSentences = [];
    
    var numberCells = document.getElementById('numberDisplay').getElementsByTagName('td');
    var userNumbers = [];

    var cardCells = document.getElementById('cardDisplay').getElementsByTagName('td');
    var userCards = [];

    var numbers = JSON.parse(sessionStorage.getItem("numbers"));

    var names = JSON.parse(sessionStorage.getItem("names"));

    var sentences = JSON.parse(sessionStorage.getItem("sentences"));

    var cards = JSON.parse(sessionStorage.getItem("cards"));
    
    for (var i = 0; i < nameCells.length; i++) {
        var naCell = nameCells[i];
        if(naCell.innerHTML != "") {
            userNames.push(naCell.innerHTML);
        }
    }

    for (var i = 0; i < sentenceCells.length; i++) {
        var sCell = sentenceCells[i];
        if(sCell.innerHTML != "") {
            userSentences.push(sCell.innerHTML);
        }
    }

    for (var i = 0; i < numberCells.length; i++) {
        var nuCell = numberCells[i];
        if(nuCell.innerHTML != "") {
            userNumbers.push(nuCell.innerHTML);
        }
    }

    for (var i = 0; i < cardCells.length; i++) {
        var cCell = cardCells[i];
        if(cCell.innerHTML != "") {
            userCards.push(cCell.innerHTML);
        }
    }

    if(userNames.length == names.length && userNumbers.length == numbers.length && userSentences.length == sentences.length && userCards.length == cards.length) {
        
        sessionStorage.setItem('userNames', JSON.stringify(userNames));
        
        sessionStorage.setItem('userSentences', JSON.stringify(userSentences));    
        
        sessionStorage.setItem('userNumbers', JSON.stringify(userNumbers));  
        
        sessionStorage.setItem('userCards', JSON.stringify(userCards));
    
        setTimeout(location.href = "onlineGrader.html", 500)
    }
    
    else {
        alert("Please make sure you are submitting the correct number of items for each category.")
    }
}
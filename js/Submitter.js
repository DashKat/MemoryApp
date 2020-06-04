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
    if(document.getElementById('nameIn').value != "") {
        var table = document.getElementById('nameDisplay');

        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = document.getElementById('nameIn').value;
        document.getElementById('nameIn').value = "";
        for(var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if(col.textContent.trim().length == 0) {
                    col.parentNode.removeChild(col);
                }
            }  
        }
    }
}


function minusName() {
    var rowID = localStorage.getItem('selectedRowName');
    try {
        if(document.getElementById('nameDisplay').rows[parseInt(rowID, 10)].cells[0].innerHTML != "") {
            document.getElementById('nameDisplay').deleteRow(parseInt(rowID, 10));
            localStorage.removeItem('selectedRowName');
        }
    }
    catch {}
}

function plusSentence() {
    if(document.getElementById('sentenceIn').value != "") {
        var table = document.getElementById('sentenceDisplay');
        var sentenceIn = document.getElementById('sentenceIn').value;
        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        
        if(sentenceIn[sentenceIn.length - 1] != "." && sentenceIn != "") {
            cell.innerHTML = sentenceIn + ".";
        }

        else {
            cell.innerHTML = sentenceIn;
        }

        document.getElementById('sentenceIn').value = "";
        for(var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if(col.textContent.trim().length == 0) {
                    col.parentNode.removeChild(col);
                }
            }  
        }
    }
}

function minusSentence() {
    var rowID = localStorage.getItem('selectedRowSentence');
    try {
        if(document.getElementById('sentenceDisplay').rows[parseInt(rowID, 10)].cells[0].innerHTML != "") {
            document.getElementById('sentenceDisplay').deleteRow(parseInt(rowID, 10));
            localStorage.removeItem('selectedRowSentence');
        }
    }
    catch {}
}

function plusNumber() {
    if(document.getElementById('numberIn').value != "") {
        var table = document.getElementById('numberDisplay');

        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = document.getElementById('numberIn').value;
        document.getElementById('numberIn').value = "";
        for(var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if(col.textContent.trim().length == 0) {
                    col.parentNode.removeChild(col);
                }
            }  
        }
    }
}

function minusNumber() {
    var rowID = localStorage.getItem('selectedRowNumber');
    try {
        if(document.getElementById('numberDisplay').rows[parseInt(rowID, 10)].cells[0].innerHTML != "") {
            document.getElementById('numberDisplay').deleteRow(parseInt(rowID, 10));
            localStorage.removeItem('selectedRowNumber');
        }
    }
    catch {}
}

function plusCard() {
    if(document.getElementById('cardNumber').value != "emptyNum" && document.getElementById('cardSuit').value != "emptySuit") {
        var table = document.getElementById('cardDisplay');

        var row = table.insertRow(table.rows.length);
        var cell = row.insertCell(0);
        cell.innerHTML = document.getElementById('cardNumber').value + " of " + document.getElementById('cardSuit').value;
        document.getElementById('cardNumber').value = 'emptyNum';
        document.getElementById('cardSuit').value = 'emptySuit';
        for(var i = 0, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if(col.textContent.trim().length == 0) {
                    col.parentNode.removeChild(col);
                }  
            }
        }
    }
}

function minusCard() {
    var rowID = localStorage.getItem('selectedRowCard');
    try {
        if(document.getElementById('cardDisplay').rows[parseInt(rowID, 10)].cells[0].innerHTML != "") {
            document.getElementById('cardDisplay').deleteRow(parseInt(rowID, 10));
            localStorage.removeItem('selectedRowCard');
        }
    }
    catch {}
}


function submit() { 
    document.getElementById('namePlusBtn').click();
    document.getElementById('numberPlusBtn').click();
    document.getElementById('sentencePlusBtn').click();
    if(document.getElementById('cardNumber').value != "emptyNum") {document.getElementById('cardPlusBtn').click();}

    var nameCells = document.getElementById('nameDisplay').getElementsByTagName('td');
    var userNames = [];

    for (var i = 0; i < nameCells.length; i++) {
        var naCell = nameCells[i];
        userNames.push(naCell.innerHTML);
    }
    localStorage.setItem('userNames', JSON.stringify(userNames));

    var sentenceCells = document.getElementById('sentenceDisplay').getElementsByTagName('td');
    var userSentences = [];

    for (var i = 0; i < sentenceCells.length; i++) {
        var sCell = sentenceCells[i];
        userSentences.push(sCell.innerHTML);
    }
    localStorage.setItem('userSentences', JSON.stringify(userSentences));

    var numberCells = document.getElementById('numberDisplay').getElementsByTagName('td');
    var userNumbers = [];

    for (var i = 0; i < numberCells.length; i++) {
        var nuCell = numberCells[i];
        userNumbers.push(nuCell.innerHTML);
    }
    localStorage.setItem('userNumbers', JSON.stringify(userNumbers));
    

    var cardCells = document.getElementById('cardDisplay').getElementsByTagName('td');
    var userCards = [];

    for (var i = 0; i < cardCells.length; i++) {
        var cCell = cardCells[i];
        userCards.push(cCell.innerHTML);
    }
    localStorage.setItem('userCards', JSON.stringify(userCards));

    setTimeout(location.href = "grader.html", 500)
}
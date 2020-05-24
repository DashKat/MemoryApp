function changeRands() {
    SentenceSelect();
    NumberSelect();
    NameSelect();
    CardSelect();
}

function clearRands() {
    document.getElementById('sentenceOut').innerHTML = "";
    document.getElementById('nameOut').innerHTML = "";
    document.getElementById('numberOut').innerHTML = "";
    document.getElementById('cardOut').src = "";
}



function easyMode() {
    numTimes = 5;
    timeDuring =  40* 1000;
    timeBetween = 15 * 1000;
}

function mediumMode() {
    numTimes = 3;
    timeDuring = 30 * 1000;
    timeBetween = 30 * 1000;
}

function hardMode() {
    numTimes = 5;
    timeDuring = 20 * 1000;
    timeBetween = 60;
}

function setRandsInterval(callback) {
    var x = 0;
    changeRands();
    setInterval(function() {
        if(x == numTimes - 1) {
            clearRands();
            localStorage.setItem("numbers", JSON.stringify(numbers));
            localStorage.setItem("names", JSON.stringify(names));
            localStorage.setItem("sentences", JSON.stringify(sentences));
            localStorage.setItem("cardSuits", JSON.stringify(cardSuits));
            localStorage.setItem("cardNums", JSON.stringify(cardNums));
            setTimeout(function() {location.href = 'grader.html';}, timeBetween);
        }
        if(x != numTimes - 1) {
            changeRands();
            x++;
        }    
    }, timeDuring);
}
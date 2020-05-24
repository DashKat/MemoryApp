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
    numTimes = 1;
    timeDuring = 40 * 1000;
    timeBetween = 10 * 1000;
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

function setRandsInterval() {
    var x = 0;
    numTimes--;
    changeRands();
    setTimeout(function() {
        clearRands();
    }, timeDuring)

    setTimeout(function() {
    }, timeBetween)

    var intervalID = setInterval(function() {
    changeRands();

    setTimeout(function() {
        x++
        clearRands();
        if(x == numTimes) {
            window.clearInterval(intervalID);
        }

    }, timeDuring);

    }, timeBetween + timeDuring);
}
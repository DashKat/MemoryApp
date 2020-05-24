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
    numTimes = 2;
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
    console.log('test');
    setInterval(function() {
        if(x == numTimes) {
            clearRands();
            setTimeout(function() {location.href = 'grader.html';}, timeBetween);
        }
        for(x; x < numTimes; x++) {
                changeRands(); 
        }    
    }, timeDuring);
}
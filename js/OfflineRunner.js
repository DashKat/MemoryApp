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
    timeDuring =  40 * 1000;
    timeBetween = 15 * 1000;
    document.getElementById("timer").innerHTML = " " + (timeDuring/1000).toString();
}

function mediumMode() {
    numTimes = 3;
    timeDuring = 30 * 1000;
    timeBetween = 30 * 1000;
    document.getElementById("timer").innerHTML = " " + (timeDuring/1000).toString();
}

function hardMode() {
    numTimes = 5;
    timeDuring = 20 * 1000;
    timeBetween = 60;
    document.getElementById("timer").innerHTML = " " + (timeDuring/1000).toString();
}

function timerBetweenSetter() {
    var timeBetween2 = timeBetween;
    timeBetween2 -= 1000;
    var betweenTimer = setInterval(function() {
        document.getElementById("timer").innerHTML = " " + (timeBetween2/1000).toString();
        if(timeBetween2 == 0) {
            clearInterval(betweenTimer);
        }
        timeBetween2 -= 1000;
    }, 1000);
}

function setRandsInterval(callback) {
    localStorage.setItem('timerState', "");
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
            setTimeout(function() {location.href = 'submission.html';}, timeBetween);
        }
        if(x != numTimes - 1) {
            changeRands();
            x++;
        }    
    }, timeDuring);

    var timeDuring2 = timeDuring;
    timeDuring2 -= 1000;
    var duringTimer = setInterval(function() {
        document.getElementById("timer").innerHTML = " " + (timeDuring2/1000).toString();
        if(timeDuring2 == 0) {
            timerBetweenSetter();
            document.getElementById("timer").innerHTML = " " + (timeBetween/1000).toString();
            document.getElementById("nameHead").style.display = "none";
            document.getElementById("nameOut").style.display = "none";
            document.getElementById("numberHead").style.display = "none";
            document.getElementById("numberOut").style.display = "none";
            document.getElementById("sentenceHead").style.display = "none";
            document.getElementById("sentenceOut").style.display = "none";
            document.getElementById("cardHead").style.display = "none";
            document.getElementById("cardOut").style.display = "none";
            document.getElementById("imageHead").style.display = "none";
            document.getElementById("imageOut").style.display = "none";
            document.getElementById("timerHead").style.fontSize = "500%";
            document.getElementById("timer").style.fontSize = "500%";
            document.getElementById("timerEnd").style.fontSize = "500%";
            clearInterval(duringTimer);
        }
        timeDuring2 -= 1000;
    }, 1000);
    
}
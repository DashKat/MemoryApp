function changeRands() {
    SentenceSelect();
    NumberSelect();
    NameSelect();
    CardSelect();
}

function changeRandsCustom() {
    SentenceSelectCustom();
    NumberSelectCustom();
    NameSelectCustom();
    CardSelectCustom();
}


function clearRands() {
    document.getElementById('sentenceOut').innerHTML = "";
    document.getElementById('nameOut').innerHTML = "";
    document.getElementById('numberOut').innerHTML = "";
    document.getElementById('cardOut').src = "";
}

function easyMode() {
    localStorage.setItem('numTimes', '1');
    timeDuring =  40 * 1000;
    timeBetween = 15 * 1000;
    document.getElementById("timer").innerHTML = " " + (timeDuring/1000).toString();
}

function mediumMode() {
    localStorage.setItem('numTimes', '3');
    timeDuring = 30 * 1000;
    timeBetween = 30 * 1000;
    document.getElementById("timer").innerHTML = " " + (timeDuring/1000).toString();
}

function hardMode() {
    localStorage.setItem('numTimes', '5');
    timeDuring = 20 * 1000;
    timeBetween = 60 * 1000;
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


function formSubmit() {
    if(document.getElementById('timeDuring').value != "" && document.getElementById('timeBetween').value != "" && document.getElementById('numTimes').value != "") {
        localStorage.setItem('numTimes', document.getElementById('numTimes').value);
        var timeDuring = parseInt(document.getElementById('timeDuring').value, 10) * 1000;
        var timeBetween = parseInt(document.getElementById('timeBetween').value, 10) * 1000;
        document.getElementById("timer").innerHTML = " " + (timeDuring/1000).toString();
        document.getElementById('myForm').style.display = "none";
        var numbers = [];
        var names = [];
        var sentences = [];
        var cards = [];
        setRandsIntervalCustom(numbers, names, sentences, cards, timeDuring, timeBetween);
    }

    else {
        alert("Please fill out all of the fields");
    }
}

function setRandsInterval() {
    var numTimes = parseInt(localStorage.getItem('numTimes'), 10);
    localStorage.setItem('timerState', "");
    var x = 0;
    changeRands();
    setInterval(function() {
        if(x == numTimes - 1) {
            clearRands();
            document.getElementById("timer").innerHTML = " 0";
            localStorage.setItem("numbers", JSON.stringify(numbers));
            localStorage.setItem("names", JSON.stringify(names));
            localStorage.setItem("sentences", JSON.stringify(sentences));
            localStorage.setItem("cards", JSON.stringify(cards));
            setTimeout(function() {location.href = 'submission.html';}, timeBetween);
        }
        else if(x != numTimes - 1) {
            changeRands();
            timeDuring2 = timeDuring;
            x++;
            document.getElementById("timer").innerHTML = " 0";
        }
    }, timeDuring);

    var timeDuring2 = timeDuring;
    timeDuring2 -= 1000;
    var duringTimer = setInterval(function() {
        if(numTimes - 1 == x && timeDuring2 == 0) {
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
        else {
            document.getElementById("timer").innerHTML = " " + (timeDuring2/1000).toString();
            timeDuring2 -= 1000;
        }
        
    }, 1000);
    
}

function setRandsIntervalCustom(numbers, names, sentences, cards, timeDuring, timeBetween) {
    localStorage.setItem("numbers", JSON.stringify(numbers));
    localStorage.setItem("names", JSON.stringify(names));
    localStorage.setItem("sentences", JSON.stringify(sentences));
    localStorage.setItem("cards", JSON.stringify(cards));

    var numTimes = parseInt(localStorage.getItem('numTimes'), 10);
    localStorage.setItem('timerState', "");
    var x = 0;
    changeRandsCustom();
    setInterval(function() {
        if(x == numTimes - 1) {
            clearRands();
            setTimeout(function() {location.href = 'submission.html';}, timeBetween);
        }
        else if(x != numTimes - 1) {
            changeRandsCustom();
            timeDuring2 = timeDuring;
            x++;
            document.getElementById("timer").innerHTML = " 0";
        }
    }, timeDuring);

    var timeDuring2 = timeDuring;
    timeDuring2 -= 1000;
    var duringTimer = setInterval(function() {
        if(numTimes - 1 == x && timeDuring2 == 0) {
            var timeBetween2 = timeBetween;
            timeBetween2 -= 1000;
            var betweenTimer = setInterval(function() {
                document.getElementById("timer").innerHTML = " " + (timeBetween2/1000).toString();
                if(timeBetween2 == 0) {
                    clearInterval(betweenTimer);
                }
                timeBetween2 -= 1000;
            }, 1000);
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
        else {
            document.getElementById("timer").innerHTML = " " + (timeDuring2/1000).toString();
            timeDuring2 -= 1000;
        }
        
    }, 1000);
    
}
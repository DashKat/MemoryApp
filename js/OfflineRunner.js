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

function skip() {
    sessionStorage.setItem('skipVar', "true")
}

function clearRands() {
    document.getElementById('sentenceOut').innerHTML = "";
    document.getElementById('nameOut').innerHTML = "";
    document.getElementById('numberOut').innerHTML = "";
    document.getElementById('cardOut').src = "";
}

function easyMode() {
    sessionStorage.setItem('numTimes', '1');
    sessionStorage.setItem('gameType', "easy");
    timeDuring =  40 * 1000;
    timeBetween = 5 * 1000;
    document.getElementById("timer").innerHTML = (timeDuring/1000).toString();
}

function mediumMode() {
    sessionStorage.setItem('numTimes', '3');
    sessionStorage.setItem('gameType', "medium");
    timeDuring = 30 * 1000;
    timeBetween = 30 * 1000;
    document.getElementById("timer").innerHTML = (timeDuring/1000).toString();
}

function hardMode() {
    sessionStorage.setItem('numTimes', '5');
    sessionStorage.setItem('gameType', "hard");
    timeDuring = 20 * 1000;
    timeBetween = 60 * 1000;
    document.getElementById("timer").innerHTML = (timeDuring/1000).toString();
}

function timerBetweenSetter() {
    var timeBetween2 = timeBetween;
    timeBetween2 -= 1000;
    var betweenTimer = setInterval(function() {
        document.getElementById("timer").innerHTML = (timeBetween2/1000).toString();
        if(timeBetween2 == 0) {
            clearInterval(betweenTimer);
        }
        timeBetween2 -= 1000;
    }, 1000);
}


function formSubmit() {
    if(document.getElementById('timeDuring').value != "" && document.getElementById('timeBetween').value != "" && document.getElementById('numTimes').value != "") {
        if(document.getElementById('timeDuring').value != "0" && document.getElementById('timeBetween').value != "0" && document.getElementById('numTimes').value != "0") {
            sessionStorage.setItem('numTimes', document.getElementById('numTimes').value);
            var timeDuring = parseInt(document.getElementById('timeDuring').value, 10) * 1000;
            var timeBetween = parseInt(document.getElementById('timeBetween').value, 10) * 1000;
            document.getElementById("timer").innerHTML = (timeDuring/1000).toString();
            document.getElementById('myForm').style.display = "none";
            var numbers = [];
            var names = [];
            var sentences = [];
            var cards = [];
            sessionStorage.setItem("numbers", JSON.stringify(numbers));
            sessionStorage.setItem("names", JSON.stringify(names));
            sessionStorage.setItem("sentences", JSON.stringify(sentences));
            sessionStorage.setItem("cards", JSON.stringify(cards));
            setRandsIntervalCustom(numbers, names, sentences, cards, timeDuring, timeBetween);
        }

        else {
            alert("Please do not fill out the form with any zeros")
        }
    }

    else {
        alert("Please fill out all of the fields with numerical values");
    }
}

function setRandsInterval() {
    sessionStorage.setItem('skipVar', "false");
    var numTimes = parseInt(sessionStorage.getItem('numTimes'), 10);
    sessionStorage.setItem('timerState', "");
    var x = 0;
    changeRands();
    document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString();
    setInterval(function() {
        if(x == numTimes - 1) {
            clearRands();
            sessionStorage.setItem("numbers", JSON.stringify(numbers));
            sessionStorage.setItem("names", JSON.stringify(names));
            sessionStorage.setItem("sentences", JSON.stringify(sentences));
            sessionStorage.setItem("cards", JSON.stringify(cards));
            setTimeout(function() {location.href = 'submission.html';}, timeBetween);
        }
        else if(x != numTimes - 1) {
            changeRands();
            timeDuring2 = timeDuring;
            x++;
            document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString()
        }
    }, timeDuring);

    setInterval(function() {
        if(sessionStorage.getItem('skipVar') == "true") {
            if(x == numTimes - 1) {
                clearRands();
                sessionStorage.setItem("numbers", JSON.stringify(numbers));
                sessionStorage.setItem("names", JSON.stringify(names));
                sessionStorage.setItem("sentences", JSON.stringify(sentences));
                sessionStorage.setItem("cards", JSON.stringify(cards));
                setTimeout(function() {location.href = 'submission.html';}, timeBetween);
                timerBetweenSetter();
                document.getElementById("timer").innerHTML = (timeBetween/1000).toString();
                document.getElementById("nameV").style.display = "none";
                document.getElementById("nameH1").style.display = "none";
                document.getElementById("nameH2").style.display = "none";
                document.getElementById("nameHead").style.display = "none";
                document.getElementById("nameOut").style.display = "none";
                document.getElementById("numberH1").style.display = "none";
                document.getElementById("numberH2").style.display = "none";
                document.getElementById("numberV").style.display = "none";
                document.getElementById("numberHead").style.display = "none";
                document.getElementById("numberOut").style.display = "none";
                document.getElementById("sentenceH1").style.display = "none";
                document.getElementById("sentenceH2").style.display = "none";
                document.getElementById("sentenceV1").style.display = "none";
                document.getElementById("sentenceV2").style.display = "none";
                document.getElementById("sentenceHead").style.display = "none";
                document.getElementById("sentenceOut").style.display = "none";
                document.getElementById("cardH1").style.display = "none";
                document.getElementById("cardH2").style.display = "none";
                document.getElementById("cardV").style.display = "none";
                document.getElementById("cardHead").style.display = "none";
                document.getElementById("cardOut").style.display = "none";
                document.getElementById("Sets").style.display = "none";
                document.getElementById("dot").style.display = "none";
                document.getElementById("skip").style.display = "none";
                clearInterval(duringTimer);
                document.getElementById("timer").style.fontSize = 7 + 'vw';
                document.getElementById("timer").style.top = 50 + '%';
                document.getElementById("timer").style.left = 50 + 'vw';

            }
            else if(x != numTimes - 1) {
                changeRands();
                timeDuring2 = timeDuring;
                x++;
                document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString()
            }
            sessionStorage.setItem('skipVar', "false");
        }
    }, 10);

    var timeDuring2 = timeDuring;
    timeDuring2 -= 1000;
    var duringTimer = setInterval(function() {
        if(numTimes - 1 == x && timeDuring2 == 0) {
            timerBetweenSetter();
            document.getElementById("timer").innerHTML = (timeBetween/1000).toString();
            document.getElementById("nameV").style.display = "none";
            document.getElementById("nameH1").style.display = "none";
            document.getElementById("nameH2").style.display = "none";
            document.getElementById("nameHead").style.display = "none";
            document.getElementById("nameOut").style.display = "none";
            document.getElementById("numberH1").style.display = "none";
            document.getElementById("numberH2").style.display = "none";
            document.getElementById("numberV").style.display = "none";
            document.getElementById("numberHead").style.display = "none";
            document.getElementById("numberOut").style.display = "none";
            document.getElementById("sentenceH1").style.display = "none";
            document.getElementById("sentenceH2").style.display = "none";
            document.getElementById("sentenceV1").style.display = "none";
            document.getElementById("sentenceV2").style.display = "none";
            document.getElementById("sentenceHead").style.display = "none";
            document.getElementById("sentenceOut").style.display = "none";
            document.getElementById("cardH1").style.display = "none";
            document.getElementById("cardH2").style.display = "none";
            document.getElementById("cardV").style.display = "none";
            document.getElementById("cardHead").style.display = "none";
            document.getElementById("cardOut").style.display = "none";
            document.getElementById("Sets").style.display = "none";
            document.getElementById("dot").style.display = "none";
            document.getElementById("skip").style.display = "none";
            clearInterval(duringTimer);
            document.getElementById("timer").style.fontSize = 7 + 'vw';
            document.getElementById("timer").style.top = 50 + '%';
            document.getElementById("timer").style.left = 50 + 'vw';

        }
        else {
            document.getElementById("timer").innerHTML = (timeDuring2/1000).toString();
            timeDuring2 -= 1000;
        }
        
    }, 1000);
    
}

function setRandsIntervalCustom(numbers, names, sentences, cards, timeDuring, timeBetween) {
    sessionStorage.setItem('skipVar', "false");
    sessionStorage.setItem("numbers", JSON.stringify(numbers));
    sessionStorage.setItem("names", JSON.stringify(names));
    sessionStorage.setItem("sentences", JSON.stringify(sentences));
    sessionStorage.setItem("cards", JSON.stringify(cards));
    sessionStorage.setItem('gameType', "custom");

    var numTimes = parseInt(sessionStorage.getItem('numTimes'), 10);
    sessionStorage.setItem('timerState', "");
    var x = 0;
    changeRandsCustom();
    document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString();
    setInterval(function() {
        if(x == numTimes - 1) {
            clearRands();
            setTimeout(function() {location.href = 'submission.html';}, timeBetween);
        }
        else if(x != numTimes - 1) {
            changeRandsCustom();
            document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString();
            timeDuring2 = timeDuring;
            x++;
            document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString()
        }
    }, timeDuring);

    setInterval(function() {
        if(sessionStorage.getItem('skipVar') == "true") {
            if(x == numTimes - 1) {
                clearRands();
                setTimeout(function() {location.href = 'submission.html';}, timeBetween);
                var timeBetween2 = timeBetween;
                timeBetween2 -= 1000;
                var betweenTimer = setInterval(function() {
                    document.getElementById("timer").innerHTML = (timeBetween2/1000).toString();
                    if(timeBetween2 == 0) {
                        clearInterval(betweenTimer);
                    }
                    timeBetween2 -= 1000;
                }, 1000);
                document.getElementById("timer").innerHTML = (timeBetween/1000).toString();
                document.getElementById("nameV").style.display = "none";
                document.getElementById("nameH1").style.display = "none";
                document.getElementById("nameH2").style.display = "none";
                document.getElementById("nameHead").style.display = "none";
                document.getElementById("nameOut").style.display = "none";
                document.getElementById("numberH1").style.display = "none";
                document.getElementById("numberH2").style.display = "none";
                document.getElementById("numberV").style.display = "none";
                document.getElementById("numberHead").style.display = "none";
                document.getElementById("numberOut").style.display = "none";
                document.getElementById("sentenceH1").style.display = "none";
                document.getElementById("sentenceH2").style.display = "none";
                document.getElementById("sentenceV1").style.display = "none";
                document.getElementById("sentenceV2").style.display = "none";
                document.getElementById("sentenceHead").style.display = "none";
                document.getElementById("sentenceOut").style.display = "none";
                document.getElementById("cardH1").style.display = "none";
                document.getElementById("cardH2").style.display = "none";
                document.getElementById("cardV").style.display = "none";
                document.getElementById("cardHead").style.display = "none";
                document.getElementById("cardOut").style.display = "none";
                document.getElementById("Sets").style.display = "none";
                document.getElementById("dot").style.display = "none";
                document.getElementById("skip").style.display = "none";
                clearInterval(duringTimer);
                document.getElementById("timer").style.fontSize = 7 + 'vw';
                document.getElementById("timer").style.top = 50 + '%';
                document.getElementById("timer").style.left = 50 + 'vw';

            }
            else if(x != numTimes - 1) {
                changeRandsCustom();
                document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString();
                timeDuring2 = timeDuring;
                x++;
                document.getElementById('Sets').innerHTML = "Set: " + (x + 1).toString() + "/" + numTimes.toString()
            }
            sessionStorage.setItem('skipVar', "false");
        }
    }, 10);

    var timeDuring2 = timeDuring;
    timeDuring2 -= 1000;
    var duringTimer = setInterval(function() {
        if(numTimes - 1 == x && timeDuring2 == 0) {
            var timeBetween2 = timeBetween;
            timeBetween2 -= 1000;
            var betweenTimer = setInterval(function() {
                document.getElementById("timer").innerHTML = (timeBetween2/1000).toString();
                if(timeBetween2 == 0) {
                    clearInterval(betweenTimer);
                }
                timeBetween2 -= 1000;
            }, 1000);
            document.getElementById("timer").innerHTML = (timeBetween/1000).toString();
            document.getElementById("nameV").style.display = "none";
            document.getElementById("nameH1").style.display = "none";
            document.getElementById("nameH2").style.display = "none";
            document.getElementById("nameHead").style.display = "none";
            document.getElementById("nameOut").style.display = "none";
            document.getElementById("numberH1").style.display = "none";
            document.getElementById("numberH2").style.display = "none";
            document.getElementById("numberV").style.display = "none";
            document.getElementById("numberHead").style.display = "none";
            document.getElementById("numberOut").style.display = "none";
            document.getElementById("sentenceH1").style.display = "none";
            document.getElementById("sentenceH2").style.display = "none";
            document.getElementById("sentenceV1").style.display = "none";
            document.getElementById("sentenceV2").style.display = "none";
            document.getElementById("sentenceHead").style.display = "none";
            document.getElementById("sentenceOut").style.display = "none";
            document.getElementById("cardH1").style.display = "none";
            document.getElementById("cardH2").style.display = "none";
            document.getElementById("cardV").style.display = "none";
            document.getElementById("cardHead").style.display = "none";
            document.getElementById("cardOut").style.display = "none";
            document.getElementById("Sets").style.display = "none";
            document.getElementById("dot").style.display = "none";
            document.getElementById("skip").style.display = "none";
            clearInterval(duringTimer);
            document.getElementById("timer").style.fontSize = 7 + 'vw';
            document.getElementById("timer").style.top = 50 + '%';
            document.getElementById("timer").style.left = 50 + 'vw';
        }
        else {
            document.getElementById("timer").innerHTML = (timeDuring2/1000).toString();
            timeDuring2 -= 1000;
        }
        
    }, 1000);
    
}
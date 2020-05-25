function CardSelect() {
    var rand = Math.round(Math.random() * 12) + 1;
    var number = "";
    var path = "projectFiles/Cards/";
    var suitNum = Math.round(Math.random()*3) + 1;
    var suit = "";

    if(1 < rand && rand <= 10) {
        number = rand.toString();
    }

    else if(rand == 11) {
        number = "jack";
    }

    else if(rand == 12) {
        number = "queen";
    }

    else if(rand == 13) {
        number = "king";
    }

    else if(rand == 1) {
        number = "ace";
    }



    if(suitNum == 1) {
        suit = "clubs";
    }

    else if(suitNum == 2) {
        suit = "diamonds";
    }

    else if(suitNum == 3) {
        suit = "hearts";
    }

    else if(suitNum == 4) {
        suit = "spades";
    }

    path = path + number + "_of_" + suit + ".png";
    document.getElementById('cardOut').src = path;
    cards.push(number + " of " + suit);
}
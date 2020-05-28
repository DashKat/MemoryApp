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
        number = "Jack";
    }

    else if(rand == 12) {
        number = "Queen";
    }

    else if(rand == 13) {
        number = "King";
    }

    else if(rand == 1) {
        number = "Ace";
    }



    if(suitNum == 1) {
        suit = "Clubs";
    }

    else if(suitNum == 2) {
        suit = "Diamonds";
    }

    else if(suitNum == 3) {
        suit = "Hearts";
    }

    else if(suitNum == 4) {
        suit = "Spades";
    }

    path = path + number.toLowerCase() + "_of_" + suit.toLowerCase() + ".png";
    document.getElementById('cardOut').src = path;
    cards.push(number + " of " + suit);
}

function CardSelectCustom() {
    var rand = Math.round(Math.random() * 12) + 1;
    var number = "";
    var path = "projectFiles/Cards/";
    var suitNum = Math.round(Math.random()*3) + 1;
    var suit = "";

    if(1 < rand && rand <= 10) {
        number = rand.toString();
    }

    else if(rand == 11) {
        number = "Jack";
    }

    else if(rand == 12) {
        number = "Queen";
    }

    else if(rand == 13) {
        number = "King";
    }

    else if(rand == 1) {
        number = "Ace";
    }



    if(suitNum == 1) {
        suit = "Clubs";
    }

    else if(suitNum == 2) {
        suit = "Diamonds";
    }

    else if(suitNum == 3) {
        suit = "Hearts";
    }

    else if(suitNum == 4) {
        suit = "Spades";
    }

    path = path + number.toLowerCase() + "_of_" + suit.toLowerCase() + ".png";
    document.getElementById('cardOut').src = path;
    var cards = JSON.parse(localStorage.getItem('cards'));
    cards.push(number + " of " + suit);
    localStorage.setItem("cards", JSON.stringify(cards));
}

function CardUpdate() {
    var rand = Math.round(Math.random() * 12) + 1;
    var number = "";
    var path = "/projectFiles/Cards/";
    var suitNum = Math.round(Math.random()*3) + 1;
    var suit = "";

    if(1 < rand && rand <= 10) {
        number = rand.toString();
    }

    else if(rand == 11) {
        number = "Jack";
    }

    else if(rand == 12) {
        number = "Queen";
    }

    else if(rand == 13) {
        number = "King";
    }

    else if(rand == 1) {
        number = "Ace";
    }



    if(suitNum == 1) {
        suit = "Clubs";
    }

    else if(suitNum == 2) {
        suit = "Diamonds";
    }

    else if(suitNum == 3) {
        suit = "Hearts";
    }

    else if(suitNum == 4) {
        suit = "Spades";
    }

    var cards = JSON.parse(localStorage.getItem('cards'));
    var cardsGrade = JSON.parse(localStorage.getItem('cardsGrade'));
    cards.push(path + number.toLowerCase() + "_of_" + suit.toLowerCase() + ".png");
    cardsGrade.push(number + " of " + suit);
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("cardsGrade", JSON.stringify(cardsGrade));
}
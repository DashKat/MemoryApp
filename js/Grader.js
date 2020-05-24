function grade() {
    var numbers = JSON.parse(localStorage.getItem("numbers"));
    localStorage.removeItem("numbers");
    var names = JSON.parse(localStorage.getItem("names"));
    localStorage.removeItem("names");
    var sentences = JSON.parse(localStorage.getItem("sentences"));
    localStorage.removeItem("sentences");
    var cardSuits = JSON.parse(localStorage.getItem("cardSuits"));
    localStorage.removeItem("cardSuits");
    var cardNums = JSON.parse(localStorage.getItem("cardNums"));
    localStorage.removeItem("cardNums");
}
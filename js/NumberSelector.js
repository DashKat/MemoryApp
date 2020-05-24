function NumberSelect() {
    var number = (Math.round(Math.random() * 8999) + 1000).toString();
    document.getElementById('numberOut').innerHTML = number;
}
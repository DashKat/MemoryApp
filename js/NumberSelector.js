function NumberSelect() {
    var number = (Math.round(Math.random() * 8999) + 1000).toString();
    document.getElementById('numberOut').innerHTML = number;
    numbers.push(number);
}

function NumberSelectCustom() {
    var number = (Math.round(Math.random() * 8999) + 1000).toString();
    document.getElementById('numberOut').innerHTML = number;
    var numbers = JSON.parse(sessionStorage.getItem('numbers'));
    numbers.push(number);
    sessionStorage.setItem("numbers", JSON.stringify(numbers));
}

function NumberUpdate() {
    var number = (Math.round(Math.random() * 8999) + 1000).toString();
    var numbers = JSON.parse(sessionStorage.getItem('numbers'));
    numbers.push(number);
    sessionStorage.setItem("numbers", JSON.stringify(numbers));
}
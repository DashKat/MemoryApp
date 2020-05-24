window.onload = function() {
    const name = document.getElementById("nameIn");
    name.onkeyup =  function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        document.getElementById("namePlusBtn").click();
    }
}
}

function plusName() {
    var nameVal = document.getElementById('nameDisplay');
    var table = document.getElementById('nameDisplay');

    var row = table.insertRow(table.rows.length);
    var cell = row.insertCell(0);
    cell.innerHTML = document.getElementById('nameIn').value;
    document.getElementById('nameIn').value = "";
    document.querySelectorAll('table tr').forEach(function(e, i) {
        if (e.textContent.trim().length == 0) { // if row is empty
            e.parentNode.removeChild(e);
        }
    })
}


function minusName() {
    var rowID = localStorage.getItem('selectedRowName');
    try {
        document.getElementsByTagName("tr")[parseInt(rowID, 10)].remove();
    }
    catch {}
}
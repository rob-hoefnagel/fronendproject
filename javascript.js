function opslaan() {
    // Formulier uitlezen
    let nameInvoer = document.getElementById('nieuweSpeler').value;

    // Maak het javascript object aan
    let newUnit = {
        nickname: nameInvoer
    }
}


function toonUnits() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var allUnits = JSON.parse(this.responseText);
            var eindString = "<table border=1>";
            for (var i = 0; i < allUnits.length; i++) {
                console.log(allUnits[i].id);
                eindString += "<tr><td>" + allUnits[i].id + "</td><td><button onclick=verwijderenUnit(" + allUnits[i].id + ")>delete</button></td></tr>";
            }
            eindString += "</table>";
            document.getElementById("alleUnitsTabel").innerHTML = eindString;
        }

    }
    xhr.open("GET", "http://localhost:8082/totalUnits", true);
    xhr.send();
}

function unitAanmaken() {
    var deUnit = {};
    deUnit.name = document.getElementById("aanmaakName").value;
    deUnit.attack = document.getElementById("aanmaakAttack").value;
    deUnit.defence = document.getElementById("aanmaakDefence").value;
    deUnit.type = document.getElementById("aanmaakType").value;
    var deJSON = JSON.stringify(deUnit);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("toevoegen gelukt");
        }

    }
    xhr.open("POST", "http://localhost:8082/newUnit", true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(deJSON);
}

function verwijderenUnit(id) {
    alert("wordt verwijdert");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {

        }

    }
    xhr.open("DELETE", "http://localhost:8082/deleteUnit/" + id, true);
    xhr.send();
}

function onStartUp() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var allUnits = JSON.parse(this.responseText);
            var tabel = document.getElementById("select2");
            select2.innerHTML = "";
            for (var i = 0; i < allUnits.length; i++) {
                var unitOption2 = document.createElement('option');
                unitOption2.value = allUnits[i].id;
                select2.appendChild(unitOption2);
                unitOption2.innerHTML = allUnits[i].name;
            }

        }
    }
    xhr.open("GET", "http://localhost:8082/totalUnits", true);
    xhr.send();
}

function toevoegenAanTabel() {
    var myValue2 = document.getElementById("select2");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var unit1 = JSON.parse(this.responseText);                   
            tableRow1.innerHTML = tableRow1.innerHTML + "<tr><td>" + unit1.name + "<td>" + unit1.attack + "</td>"+ "<td>" + unit1.defence + "</td>"+ "<td>" + unit1.type + "</td><td><button onclick=removeRow()>delete</button></td></tr>";
        }
    }
    xhr.open("GET", "http://localhost:8082/unit/" + myValue2.value, true);
    xhr.send();

}

function removeRow (){
    var td = event.target.parentNode; 
      var tr = td.parentNode;
      tr.parentNode.removeChild(tr);
    }

    function refreshPage(){
        window.location.reload();
    } 


onStartUp();

// function spelersOphalen() {
//     document.getElementById("uitkomstAlles").innerHTML = "";
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4) {
//             console.log(this.responseText);
//             var antwoordlijst = JSON.parse(this.responseText);
//             // document.getElementById
//             for (var x = 0; x < antwoordlijst.length; x++) {
//                 document.getElementById("uitkomstAlles").innerHTML += "<p>" + antwoordlijst[x].nickname + "</p>";
//             }
//             // document.getElementById("uitkomst").innerHTML = antwoord.name;
//         }
//     }
//     xhr.open("Get", "http://localhost:8082/totaalSpelers", true);
//     xhr.send();
// }

// fetch("http://localhost:8082/newPlayer2", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newUnit)
    //     })
    //         .then(response => {
    //             alert('Is goedgegaan');
    //         })
    //         .catch(error => {
    //             alert('Er is iets fouts gegaan: ' + error);
    //         });
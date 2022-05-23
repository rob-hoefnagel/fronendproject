function opslaan() {
    // Formulier uitlezen
    let nameInvoer = document.getElementById('nieuweSpeler').value;

    // Maak het javascript object aan
    let newUnit = {
        nickname: nameInvoer
    }
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

function verwijderUnit(id) {
    var myValue3 = document.getElementById("select3").value;
    alert("wordt verwijdert"+myValue3);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(myValue3);
            //var unit2 = JSON.parse(this.responseText);

        }

    }
   xhr.open("DELETE", "http://localhost:8082/deleteUnit/" + myValue3, true);
   xhr.send();
}
function wijzigGekozenUnit(){
    var idUnit = document.getElementById("dropdownEditUnits").value;
    console.log("id unit: "+idUnit);
    document.getElementById("allestukkendropdown").hidden = true;  
    document.getElementById("allestukkenedit").hidden = false;  
}
function annuleerWijziging(){
    document.getElementById("allestukkendropdown").hidden = false;  
    document.getElementById("allestukkenedit").hidden = true;     
}
function wijzigUnit(){
    console.log("hij wijzigt");
}
function onStartUp() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var allUnits = JSON.parse(this.responseText);
            var tabel = document.getElementById("select2");
            select2.innerHTML = "";
            var tabel = document.getElementById("select3");
            select2.innerHTML = "";
            var editdropdown = document.getElementById("dropdownEditUnits");
            for (var i = 0; i < allUnits.length; i++) {
                var unitOption2 = document.createElement('option');
                unitOption2.value = allUnits[i].id;
                select2.appendChild(unitOption2);
                unitOption2.innerHTML = allUnits[i].name;

                var unitOption3 = document.createElement('option');
                unitOption3.value = allUnits[i].id;
                select3.appendChild(unitOption3);
                unitOption3.innerHTML = allUnits[i].name;
                
                var unitOptionEdit = document.createElement('option');
                unitOptionEdit.value = allUnits[i].id;
                editdropdown.appendChild(unitOptionEdit);
                unitOptionEdit.innerHTML = allUnits[i].name;
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

// ("http://localhost:8082/newPlayer2", {
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

    // function toonUnits() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function () {
    //         if (this.readyState == 4) {
    //             console.log(this.responseText);
    //             var allUnits = JSON.parse(this.responseText);
    //             var eindString = "<table border=1>";
    //             for (var i = 0; i < allUnits.length; i++) {
    //                 console.log(allUnits[i].id);
    //                 eindString += "<tr><td>" + allUnits[i].id + "</td><td><button onclick=verwijderenUnit(" + allUnits[i].id + ")>delete</button></td></tr>";
    //             }
    //             eindString += "</table>";
    //             document.getElementById("alleUnitsTabel").innerHTML = eindString;
    //         }
    
    //     }
    //     xhr.open("GET", "http://localhost:8082/totalUnits", true);
    //     xhr.send();
    // }
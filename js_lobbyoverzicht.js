function toonAlleSpellen(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var alleSpellen = JSON.parse(this.responseText);
            console.log(this.responseText);
            var deDiv = document.getElementById("allespellen");
            deDiv.innerHTML = "";
            for(var x =0; x<alleSpellen.length ; x++){
                deDiv.innerHTML += alleSpellen[x].name+"<br>";
            }
        }
    }
   xhr.open("GET", "http://localhost:8082/allegames/", true);
   xhr.send();
}
console.log("ho");
toonAlleSpellen();

function maakGameAan(){
    var deGame = {};
    deGame.name = document.getElementById("gamename").value;
    deGame.datetime = document.getElementById("gametime").value;
    var degameJSON = JSON.stringify(deGame);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("opgeslagen");
        }
    }
   xhr.open("POST", "http://localhost:8082/creategame/", true);
   xhr.setRequestHeader("Content-Type","application/json");
   xhr.send(degameJSON);
}

/*
function XXXXXXXXXXXX(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
        }
    }
   xhr.open("GET", "http://localhost:8082/unit/", true);
   xhr.send();
}
*/
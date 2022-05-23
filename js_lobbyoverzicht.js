function toonAlleSpellen(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var alleSpellen = JSON.parse(this.responseText);
            console.log(this.responseText);
            var deDiv = document.getElementById("allespellen");
            deDiv.innerHTML = "";
            for(var x =0; x<alleSpellen.length ; x++){
                console.log("============");
                if(alleSpellen[x].player2 == null){
                    deDiv.innerHTML += alleSpellen[x].name+"<input type=button onclick=\"gaNaarGame("+ alleSpellen[x].id+")\" value=\"Join\"><br>";
                }else{
                    deDiv.innerHTML += alleSpellen[x].name+" (VOL) <br>";
                }
            }
            haalSpelerGegevensOp();
        }
    }
   xhr.open("GET", "http://localhost:8082/allegames/", true);
   xhr.send();
}
function haalSpelerGegevensOp(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var player = JSON.parse(this.responseText);
            document.getElementById("spelernaam").innerHTML = "Welkom "+player.nickname
        }
    }
   xhr.open("GET", "http://localhost:8082/verkrijgSpelerById/"+localStorage.getItem("speleridchessgame"), true);
   xhr.send();
}

toonAlleSpellen();

function maakGameAan(){
    var deGame = {};     // Game deGame = new Game();
    deGame.name = document.getElementById("gamename").value;
                    // class Game{
    //                    String naam;
  //                  }
//                    deGame.naam = "ingevuld";
    deGame.datetime = document.getElementById("gametime").value;
    console.log(">>>>>>>>>>>>>");
    console.log(deGame);
    var degameJSON = JSON.stringify(deGame);
    console.log(degameJSON);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log("opgeslagen");
        }
    }
   xhr.open("POST", "http://localhost:8082/creategame/"+localStorage.getItem("speleridchessgame"), true);
   xhr.setRequestHeader("Content-Type","application/json");
   xhr.send(degameJSON);
}
function gaNaarGame(gameid){
    window.location = "./lobby.html?gameid="+gameid;
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
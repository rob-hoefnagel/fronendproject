var gameidglobaal;

function getGameId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gameid = urlParams.get('gameid');
    gameidglobaal = gameid;
    maakTitelGame();
}

function maakTitelGame(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
            var deGame = JSON.parse(this.responseText);
            document.getElementById("gametitel").innerHTML = deGame.name;
        }
    }
    xhr.open("GET", "http://localhost:8082/getGame/"+gameidglobaal, true);
    xhr.send();
}

window.onload = getGameId;
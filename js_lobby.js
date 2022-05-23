var gameidglobaal;

function getGameId(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gameid = urlParams.get('gameid');
    gameidglobaal = gameid;
    maakTitelGame();
}

function maakTitelGame(){
    var xhr = new XMLHttpRequest(); //1
    xhr.onreadystatechange = function () {//2
        if (this.readyState == 4) {//5
            console.log(this.responseText);//6
            var deGame = JSON.parse(this.responseText);//7
            document.getElementById("gametitel").innerHTML = deGame.name;//8
        }
        // nieuwe call
    }
    xhr.open("GET", "http://localhost:8082/getGame/"+gameidglobaal, true);//3
    xhr.send();//4
}

window.onload = getGameId;
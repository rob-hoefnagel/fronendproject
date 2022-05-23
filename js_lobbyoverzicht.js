function toonAlleSpellen(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var alleSpellen = JSON.parse(this.responseText);
            console.log(this.responseText);
            var deDiv = document.getElementById("allespellen");
            deDiv.innerHTML = "";
            for(var x =0; x<alleSpellen.length ; x++){
                deDiv.innerHTML += alleSpellen[x].name;
            }
        }
    }
   xhr.open("GET", "http://localhost:8082/allegames/", true);
   xhr.send();
}
console.log("ho");
toonAlleSpellen();

/*
function toonAlleSpellen(){
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

class Player {
    constructor() {
        this.random = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length);
        this.comments = document.getElementById("comments");
        this.player;
        this.temp;
        //
        //this.pressedKey = tourManager.pressedKey;
        //
    }
    initPlayer() {
        this.temp = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[this.random]).innerHTML;
        this.player = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[this.random]);
        //this.player.style.background = "blue";
        this.player.style.color = "white";
        this.player.innerHTML = "@";
        this.player.style.fontSize = "1.3em";
    }
    movePlayer() {
        //document.addEventListener("keydown", (e) => {
            //let pressedKey = e.key;
            if(tourManager.pressedKey == "ArrowUp") {
                console.log("up");
                if(document.getElementById((this.player.id) - 83).innerHTML == "_"
                || document.getElementById((this.player.id) - 83).innerHTML == "|"
                || document.getElementById((this.player.id) - 83).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    document.getElementById(this.player.id).style.fontSize = "1em";
                    this.temp = document.getElementById(Number(this.player.id) - 83).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) - 83);
                    //this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                    this.player.style.fontSize = "1.3em";
                }
                fogOfWar.render("up");
            }
            if(tourManager.pressedKey == "ArrowDown") {
                if(document.getElementById((Number(this.player.id)) + 83).innerHTML == "_"
                || document.getElementById((Number(this.player.id)) + 83).innerHTML == "|"
                || document.getElementById((Number(this.player.id)) + 83).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    document.getElementById(this.player.id).style.fontSize = "1em";
                    this.temp = document.getElementById(Number(this.player.id) + 83).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) + 83);
                    //this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                    this.player.style.fontSize = "1.3em";
                }
                fogOfWar.render("down");
            }
            if(tourManager.pressedKey == "ArrowLeft") {
                if(document.getElementById((this.player.id) - 1).innerHTML == "_"
                || document.getElementById((this.player.id) - 1).innerHTML == "|"
                || document.getElementById((this.player.id) - 1).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    document.getElementById(this.player.id).style.fontSize = "1em";
                    this.temp = document.getElementById(Number(this.player.id) - 1).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) - 1);
                    //this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                    this.player.style.fontSize = "1.3em";
                }
                fogOfWar.render("left");
            }
            if(tourManager.pressedKey == "ArrowRight") {    
                if(document.getElementById((Number(this.player.id)) + 1).innerHTML == "_"
                || document.getElementById((Number(this.player.id)) + 1).innerHTML == "|"
                || document.getElementById((Number(this.player.id)) + 1).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    document.getElementById(this.player.id).style.fontSize = "1em";
                    this.temp = document.getElementById(Number(this.player.id) + 1).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) + 1);
                    //this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                    this.player.style.fontSize = "1.3em";
                }
                fogOfWar.render("right");
            }
            //this.findObject();
            //this.findEntry();
            //this.findExit();
        //})
    }
    findObject() {
        if(board.potion.id == this.player.id) {
            this.pushObjectInInventory();
            this.comments.innerHTML = "Potion trouvée !";
        }
    }
    pushObjectInInventory() {
        inventory.inventory.push({ "potion verte" : "poison violent" });
    }
    findEntry() {
        if(board.entry.id == this.player.id) {
            this.comments.innerHTML = "C'est bloqué, impossible de remonter... ";
            board.createNewMapWhenEntryFounded();
        }
    }
    findExit() {
        if(board.exit.id == this.player.id) {
            this.comments.innerHTML = "Vous descendez au niveau X ... ";
            board.createNewMapWhenExitFounded();
        }
    }
}

const player = new Player();
player.initPlayer();
//
//player.movePlayer(); appellée dans tourmanager
//
// player.findObject();
// player.findEntry();
// player.findExit();
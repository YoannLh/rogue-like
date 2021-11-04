
class Player {
    constructor() {
        this.random = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length);
        this.comments = document.getElementById("comments");
        this.player;
        this.temp;
    }
    initPlayer() {
        this.temp = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[this.random]).innerHTML;
        this.player = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[this.random]);
        this.player.style.background = "blue";
        this.player.innerHTML = "@";
    }
    movePlayer() {
        document.addEventListener("keydown", (e) => {
            let pressedKey = e.key;
            if(pressedKey == "ArrowUp") {
                if(document.getElementById((this.player.id) - 83).innerHTML == "_"
                || document.getElementById((this.player.id) - 83).innerHTML == "|"
                || document.getElementById((this.player.id) - 83).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    this.temp = document.getElementById(Number(this.player.id) - 83).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) - 83);
                    this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                }
                this.fogOfWar("up");
            }
            if(pressedKey == "ArrowDown") {
                if(document.getElementById((Number(this.player.id)) + 83).innerHTML == "_"
                || document.getElementById((Number(this.player.id)) + 83).innerHTML == "|"
                || document.getElementById((Number(this.player.id)) + 83).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    this.temp = document.getElementById(Number(this.player.id) + 83).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) + 83);
                    this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                }
                this.fogOfWar("down");
            }
            if(pressedKey == "ArrowLeft") {
                if(document.getElementById((this.player.id) - 1).innerHTML == "_"
                || document.getElementById((this.player.id) - 1).innerHTML == "|"
                || document.getElementById((this.player.id) - 1).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    this.temp = document.getElementById(Number(this.player.id) - 1).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) - 1);
                    this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                }
                this.fogOfWar("left");
            }
            if(pressedKey == "ArrowRight") {    
                if(document.getElementById((Number(this.player.id)) + 1).innerHTML == "_"
                || document.getElementById((Number(this.player.id)) + 1).innerHTML == "|"
                || document.getElementById((Number(this.player.id)) + 1).innerHTML == "") {
                } else {
                    document.getElementById(this.player.id).innerHTML = this.temp;
                    document.getElementById(this.player.id).style.background = "black";
                    this.temp = document.getElementById(Number(this.player.id) + 1).innerHTML;
                    this.player = document.getElementById(Number(this.player.id) + 1);
                    this.player.style.background = "blue";
                    this.player.innerHTML = "@";
                }
                this.fogOfWar("right");
            }
            this.findObject();
            this.findEntry();
            this.findExit();
        })
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
    fogOfWar(direction) {
        console.log("fog");
        for(let i = 1; i <= 7; i++) {
            document.getElementById(Number(this.player.id) - 83 * i).style.color = "white";
            document.getElementById(Number(this.player.id) + 83 * i).style.color = "white";
            document.getElementById(Number(this.player.id) - 1 * i).style.color = "white";
            document.getElementById(Number(this.player.id) + 1 * i).style.color = "white";
        }
        if(direction == "up") {
            for(let i = 1; i <= 7; i++) {
                if(document.getElementById(Number(this.player.id) - 83 * i).innerHTML == "_") {
                    //document.getElementById(Number(this.player.id) - 83 * i - 83).style.color = "blue";
                } else {
                    //document.getElementById(Number(this.player.id) - 83 * i).style.color = "white";
                }
            }
        }
        if(direction == "down") {
            for(let i = 1; i <= 7; i++) {
                if(document.getElementById(Number(this.player.id) + 83 * i).innerHTML == "_") {
                } else {
                    //document.getElementById(Number(this.player.id) + 83 * i).style.color = "blue";
                }
            }       
        }
        if(direction == "left") {
            for(let i = 1; i <= 7; i++) {
                if(document.getElementById(Number(this.player.id) - 1 * i).innerHTML == "|") {
                } else {
                    //document.getElementById(Number(this.player.id) - 1 * i).style.color = "blue";
                }
            }   
        }
        if(direction == "right") {
            for(let i = 1; i <= 7; i++) {
                if(document.getElementById(Number(this.player.id) + 1 * i).innerHTML == "|") {
                } else {
                    //document.getElementById(Number(this.player.id) + 1 * i).style.color = "blue";
                }
            }   
        }
        // for(let i = 1; i <= 7; i++) {
        //     document.getElementById(Number(this.player.id) - 83 * i).style.color = "white";
        //     document.getElementById(Number(this.player.id) + 83 * i).style.color = "white";
        //     document.getElementById(Number(this.player.id) - 1 * i).style.color = "white";
        //     document.getElementById(Number(this.player.id) + 1 * i).style.color = "white";
        // }
        // document.getElementById(Number(this.player.id) - 83 * i - 83 - i).style.color = "white";
        // document.getElementById(Number(this.player.id) - 83 * i - 83 + i).style.color = "white";
        // document.getElementById(Number(this.player.id) + 83 * i + 83 + i).style.color = "white";
        // document.getElementById(Number(this.player.id) + 83 * i + 83 - i).style.color = "white";
        //document.getElementById(Number(this.player.id) - 1 * i - 1 - i).style.color = "white";
        //document.getElementById(Number(this.player.id) + 1 * i + 1 + i).style.color = "white"
    }
}

const player = new Player();
player.initPlayer();
player.movePlayer();
// player.findObject();
// player.findEntry();
// player.findExit();
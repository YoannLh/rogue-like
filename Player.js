
class Player {
    constructor() {
        this.random = Math.floor(Math.random() * 2490) + 1;
        this.initCase = document.getElementById(this.random);
        this.firstMove;
        this.actualMove;
        this.nextMove = document.getElementById(this.random);
        this.comments = document.getElementById("comments");
    }
    initPlayer() {
        this.initCase.style.background = "blue";
        this.initCase.innerHTML = "@";
    }
    movePlayer() {
        document.addEventListener("keydown", (e) => {
            let pressedKey = e.key;
            if(pressedKey == "ArrowUp") {
                if(this.initCase.id != this.random) {
                    this.actualMove = document.getElementById(this.nextMove.id);
                    this.actualMove.style.background = "black";
                    this.actualMove.innerHTML = ".";
                    this.nextMove = document.getElementById(this.actualMove.id - 83);
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                }
                if(this.initCase.id == this.random) {
                    this.firstMove = document.getElementById(this.random);
                    this.firstMove.style.background = "black";
                    this.firstMove.innerHTML = ".";
                    this.nextMove = document.getElementById(this.random - 83);
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                    this.initCase = 0;
                }
            }
            if(pressedKey == "ArrowDown") {
                if(this.initCase.id != this.random) {
                    this.actualMove = document.getElementById(this.nextMove.id);
                    this.actualMove.style.background = "black";
                    this.actualMove.innerHTML = ".";
                    this.nextMove = document.getElementById((Number(this.actualMove.id) + 83));
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                }
                if(this.initCase.id == this.random) {
                    this.firstMove = document.getElementById(this.random);
                    this.firstMove.style.background = "black";
                    this.firstMove.innerHTML = ".";
                    this.nextMove = document.getElementById(Number(this.random + 83));
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                    this.initCase = 0;
                }
            }
            if(pressedKey == "ArrowLeft") {
                if(this.initCase.id != this.random) {
                    this.actualMove = document.getElementById(this.nextMove.id);
                    this.actualMove.style.background = "black";
                    this.actualMove.innerHTML = ".";
                    this.nextMove = document.getElementById(this.actualMove.id - 1);
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                }
                if(this.initCase.id == this.random) {
                    this.firstMove = document.getElementById(this.random);
                    this.firstMove.style.background = "black";
                    this.firstMove.innerHTML = ".";
                    this.nextMove = document.getElementById(this.random - 1);
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                    this.initCase = 0;
                }
            }
            if(pressedKey == "ArrowRight") {
                if(this.initCase.id != this.random) {
                    this.actualMove = document.getElementById(this.nextMove.id);
                    this.actualMove.style.background = "black";
                    this.actualMove.innerHTML = ".";
                    this.nextMove = document.getElementById(Number(this.actualMove.id) + 1);
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                }
                if(this.initCase.id == this.random) {
                    this.firstMove = document.getElementById(this.random);
                    this.firstMove.style.background = "black";
                    this.firstMove.innerHTML = ".";
                    this.nextMove = document.getElementById(this.random + 1);
                    this.nextMove.style.background = "blue";
                    this.nextMove.innerHTML = "@";
                    this.initCase = 0;
                }
            }
            this.findObject();
            this.findExit();
        })
    }
    findObject() {
        if(board.potion.id == this.nextMove.id) {
            this.pushObjectInInventory();
            this.comments.innerHTML = "Potion trouvée !";
        }
    }
    pushObjectInInventory() {
        inventory.inventory.push({ "potion verte" : "poison violent" });
    }
    findExit() {
        if(board.exit.id == this.nextMove.id) {
            this.comments.innerHTML = "Vous descendez au niveau X ... ";
            board.createNewMapWhenExitFounded();
        }
    }
}

const player = new Player();
player.initPlayer();
player.movePlayer();
//player.findObject();
//player.findExit();
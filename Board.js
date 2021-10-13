
class Board {
    constructor() {
        this.board = document.getElementById('board');
        //this.vertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
        this.totalCases = 2490;
        this.numberOfRooms = Math.floor(Math.random() * 4) + 3;
        //this.numberOfRooms = 3;
        //
        this.potion;
        //
        this.entry;
        this.exit;
        //
    }
    drawCases() {
        //83 cases / 31 rows
        for(let i = 1; i <= this.totalCases; i++) {
            const elt = document.createElement('div');
            elt.id = i;
            elt.style.height = "18px";
            elt.style.width = "1.2%";
            //elt.style.border = "1px solid red";
            //elt.style.color = "white";
            //elt.innerHTML = ".";
            this.board.appendChild(elt);
        } 
    }
    summonRooms() {
        console.log("board number of rooms : " + this.numberOfRooms);
        rooms.drawRooms(this.numberOfRooms);
    }
    drawEntry() {
        let randomCaseEntry = Math.floor(Math.random() * rooms.surfaces.length) + 1;
        this.entry = document.getElementById(rooms.surfaces[randomCaseEntry]);
        this.entry.style.background = "orange";
    }
    drawExit() {
        let randomCaseExit = Math.floor(Math.random() * rooms.surfaces.length) + 1;
        this.exit = document.getElementById(rooms.surfaces[randomCaseExit]);
        this.exit.style.background = "red";
    }
    drawPotion() {
        let randomPotion = Math.floor(Math.random() * rooms.surfaces.length) + 1;
        this.potion = document.getElementById(rooms.surfaces[randomPotion]);
        this.potion.style.background = "green";
    }
    createNewMapWhenEntryFounded() {
        console.log("");
    }
    createNewMapWhenExitFounded() {
        const board = new Board();
        board.drawCases();
        board.drawExit();
        board.drawPotion();
    }
}

const board = new Board();
board.drawCases();
board.summonRooms();
board.drawEntry();
board.drawExit();
board.drawPotion();

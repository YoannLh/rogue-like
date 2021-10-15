
class Board {
    constructor() {
        this.board = document.getElementById('board');
        //this.vertical = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];
        this.totalCases = 2490;
        this.sidesOfScreen = [];
        this.numberOfRooms = Math.floor(Math.random() * (Math.floor(9) - Math.ceil(5) + 1)) + 5;
        //this.numberOfRooms = 3;
        //
        this.potion;
        //
        this.entry;
        this.exit;
        //
    }
    drawCases() {
        //83 cases / 30 rows
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
    getSidesOfBoard() {
        let rows = 30;
        let casesPerRow = 83;
        for(let i = 1; i <= this.totalCases; i++) {
            if(i <= casesPerRow) {
                this.sidesOfScreen.push(i);
            }
            for(let x = 1; x <= rows; x++) {
                if(i == x * casesPerRow + 1) {
                    this.sidesOfScreen.push(i);
                }
                if(i == x * casesPerRow + 83) {
                    this.sidesOfScreen.push(i);
                }
            }
            if(i >= this.totalCases + 1 - casesPerRow) {
                this.sidesOfScreen.push(i);
            }
        }
        //  
        // for(const coordonnee of this.sidesOfScreen) {
        //     //let up = document.getElementById(coordonnee);
        //     up.style.background = "purple";
        // }  
        // for(let i = 1; i <= this.totalCases; i++) {
        //     let c = document.getElementById(i);
        //     if(c.id == (i * 83 + 1) && c.id <= (i * 83 + 1 + 8)) {
        //         c.style.background = "green";
        //         console.log("ok 1"); 
        //     }
        // }

        //document.getElementById(1).style.background = "green";

        // if((caseStartRoom.id >= (i * 83 + 1) && caseStartRoom.id <= (i * 83 + 1 + 8))) {
    }
    summonRooms() {
        console.log("board number of rooms : " + this.numberOfRooms);
        rooms.createRooms(this.sidesOfScreen, this.numberOfRooms);
    }
    drawEntry() {
        let randomCaseEntry = Math.floor(Math.random() * rooms.surfacesOfRooms.length) + 1;
        this.entry = document.getElementById(rooms.surfacesOfRooms[randomCaseEntry]);
        console.log("entry div : " + randomCaseEntry)
        this.entry.style.background = "orange";
    }
    drawExit() {
        let randomCaseExit = Math.floor(Math.random() * rooms.surfacesOfRooms.length) + 1;
        this.exit = document.getElementById(rooms.surfacesOfRooms[randomCaseExit]);
        console.log("exit div : " + randomCaseExit)
        this.exit.style.background = "red";
    }
    drawPotion() {
        let randomPotion = Math.floor(Math.random() * rooms.surfacesOfRooms.length) + 1;
        this.potion = document.getElementById(rooms.surfacesOfRooms[randomPotion]);
        console.log("potion div : " + randomPotion)
        this.potion.style.background = "green";
    }
    createNewMapWhenEntryFounded() {
        console.log("createNewMapWhenEntryFounded");
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
board.getSidesOfBoard();
board.summonRooms();
board.drawEntry();
board.drawExit();
board.drawPotion();

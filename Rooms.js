
class Rooms {
    constructor() {
        this.width = 7;
        this.height = 12;
        this.surfaces = [];
    }
    drawRooms(numberOfRooms) {
        console.log("rooms : " + numberOfRooms);
        for(let room = 0; room <= numberOfRooms; room++) {
            console.log("go rooms")
            let caseStartRoom = document.getElementById(Math.floor(Math.random() * 2320) + 85);
            let downWall;
            let rightWall;
            let leftWall;
            let upWall;
            //let doors = Math.floor(Math.random() * 4) + 1;
            let door;
            caseStartRoom.style.color = "white";
            caseStartRoom.innerHTML = "_";
            for(let i = 1; i < 9; i++) {
                downWall = document.getElementById(caseStartRoom.id - i);
                downWall.style.color = "white";
                downWall.innerHTML = "_";
                //
                for(const coordonnee of this.surfaces) {
                    if(downWall.id == coordonnee ) {
                        room = room;
                        console.log("NON DOWNWALL !");
                        return;
                    }
                }
                //
            }
            for(let i = 1; i <= 6; i++) {
                rightWall = document.getElementById(caseStartRoom.id - (i * 83));
                rightWall.style.color = "white";
                rightWall.innerHTML = "|";
                //
                for(const coordonnee of this.surfaces) {
                    if(rightWall.id == coordonnee ) {
                        room = room;
                        console.log("NON RIGHTWALL !");
                        return;
                    }
                }
                //
            }
            for(let i = 1; i <= 6; i++) {
                leftWall = document.getElementById(caseStartRoom.id - 8 - (i * 83));
                leftWall.style.color = "white";
                leftWall.innerHTML = "|";
                //
                for(const coordonnee of this.surfaces) {
                    if(leftWall.id == coordonnee ) {
                        room = room;
                        console.log("NON LEFTWALL !");
                        return;
                    }
                }
                //
            }
            for(let i = 1; i <= 9; i++) {
                upWall = document.getElementById(caseStartRoom.id - (6 * 83) - i + 1);
                upWall.style.color = "white";
                upWall.innerHTML = "_";
                //
                for(const coordonnee of this.surfaces) {
                    if(upWall.id == coordonnee ) {
                        room = room;
                        console.log("NON UPWALL !");
                        return;
                    }
                }
                //
            }
            //
            let x = Number(leftWall.id) + 1 + 83;
            let temp = x;
            console.log("room " + numberOfRooms + " x : " + x);
            let y = Number(caseStartRoom.id) -83 - 1;
            console.log("room " + numberOfRooms + " y : " + y);
            let totalCases = 1;
            let count = 1;
            for(let i = 1; i <= 7; i++) {
                this.surfaces.push(x);
                let c = document.getElementById(x);
                c.innerHTML = ".";
                c.style.color = "white";
                x++;
                totalCases++;
                if(i == 7) {
                    i = 0;
                    x = temp + (count * 83);
                    count++;
                }
                if(totalCases == 36) {
                    i = 7;
                }
            }
            //
            // this.surfaces.push({ "surface" : surface });
            //
            numberOfRooms--;
            if(numberOfRooms == 0) {
                return;
            }
        }
    }
}

const rooms = new Rooms();
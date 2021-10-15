
class Rooms {
    constructor() {
        this.width = 7;
        this.height = 12;
        this.totalCases = 2490;
        this.surfacesOfRooms = [];
        this.roomsWithTheirSurfaces = [];
    }
    drawRoom(caseStartRoom) {
        console.log("enter in drawing phase");
        let downWall;
        let rightWall;
        let leftWall;
        let upWall;
        let checkIfAtLeastOneDoorExists = false;
        caseStartRoom.style.color = "white";
        caseStartRoom.innerHTML = "_";
        for(let i = 1; i < 9; i++) {
            downWall = document.getElementById(Number(caseStartRoom.id) - i);
            downWall.style.color = "white";
            downWall.innerHTML = "_";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(door != 0 && i == 4) {
                let doorOk = document.getElementById(Number(caseStartRoom.id) - i);
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                checkIfAtLeastOneDoorExists = true;
            }
        }
        for(let i = 1; i <= 6; i++) {
            rightWall = document.getElementById(Number(caseStartRoom.id) - (i * 83));
            rightWall.style.color = "white";
            rightWall.innerHTML = "|";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(door != 0 && i == 3) {
                let doorOk = document.getElementById(Number(caseStartRoom.id) - (i * 83));
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                checkIfAtLeastOneDoorExists = true;
            }
        }
        for(let i = 1; i <= 6; i++) {
            leftWall = document.getElementById(Number(caseStartRoom.id) - 8 - (i * 83));
            leftWall.style.color = "white";
            leftWall.innerHTML = "|";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(door != 0 && i == 3) {
                let doorOk = document.getElementById(Number(caseStartRoom.id) - 8 - (i * 83));
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                checkIfAtLeastOneDoorExists = true;
            }
        }
        for(let i = 1; i <= 9; i++) {
            upWall = document.getElementById(Number(caseStartRoom.id) - (6 * 83) - i + 1);
            upWall.style.color = "white";
            upWall.innerHTML = "_";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(i == 5) {
                // Porte systématiquement créée
                let doorOk = document.getElementById(Number(caseStartRoom.id) - (6 * 83) - i + 1);
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
            }
        }
        let x = Number(leftWall.id) + 1 + 83;
        console.log("x : " + x);
        let temp = x;
        const surface = [];
        let y = Number(caseStartRoom.id) - 83 - 1;
        console.log("y : " + y);
        let totalCases = 1;
        let count = 1;
        for(let i = 1; i <= 7; i++) {
            this.surfacesOfRooms.push(x);
            surface.push(x);
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
        console.log("room créée !");
    }
    createRooms(sideOfScreen, numberOfRooms) {
        console.log("enter in checking colision phase");
        for(let room = 1; room <= numberOfRooms; room++) {
            let caseStartRoom = document.getElementById(Math.floor(Math.random() * (Math.floor(2490) - Math.ceil(499) + 1)) + Math.ceil(499));
            console.log("start : " + Number(caseStartRoom.id));
            //console.log("floor : ", Number(caseStartRoom.id) - 8);
            //console.log("right : ", Number(caseStartRoom.id) - (6 * 83));
            //console.log("left : ", Number(caseStartRoom.id) - 8 - (6 * 83));
            for(let i = 0; i < 30; i++) {
                console.log("check if problem with start, loop " + 
                i + 
                ", " + 
                "gauche >= " + 
                (i * 83 + 1) + 
                " < ? > " + 
                (i * 83 + 1 + 9) + 
                " =< droite");
                if((Number(caseStartRoom.id) >= (i * 83 + 1) && Number(caseStartRoom.id) <= (i * 83 + 1 + 8))) {
                    console.log("check if problem with start");
                    console.log("Probleme avec case start " + Number(caseStartRoom.id));
                    caseStartRoom = document.getElementById(Math.floor(Math.random() * (Math.floor(2490) - Math.ceil(499) + 1)) + Math.ceil(499));
                    console.log("new case start : " + Number(caseStartRoom.id));
                    i = -1;
                }
            }
            for(let i = 0; i <= sideOfScreen.length; i++) {
                console.log("go checking corners boucle");
                if(Number(caseStartRoom.id) <= 0
                || Number(caseStartRoom.id) - 8 <= 0
                || Number(caseStartRoom.id) - (6 * 83) <= 0
                || Number(caseStartRoom.id) - 8 - (6 * 83) <= 0
                //|| (caseStartRoom.id >= (i * 83 + 1) && caseStartRoom.id <= (i * 83 + 1 + 9))
                || sideOfScreen[i] === Number(caseStartRoom.id)
                || sideOfScreen[i] === Number(caseStartRoom.id) - 8 
                || sideOfScreen[i] === Number(caseStartRoom.id) - (6 * 83)
                || sideOfScreen[i] === Number(caseStartRoom.id) - 8 - (6 * 83))
                {
                    console.log("Problem with sides and corners, need to create a new start of room");
                    room--;
                    break;
                } else {
                    console.log("else, corners ok pour drawing !");
                    this.drawRoom(caseStartRoom);
                    break;
                }
            }
            // for(let i = 0; i <= this.surfacesOfRooms.length; i++) {
            //     if(this.surfacesOfRooms[i] === Number(caseStartRoom.id)
            //     || this.surfacesOfRooms[i] === Number(caseStartRoom.id) - 8 
            //     || document.getElementById((Number(caseStartRoom.id)) == null)
            //     || this.surfacesOfRooms[i] === Number(caseStartRoom.id) - (6 * 83)
            //     || document.getElementById(Number(caseStartRoom.id) - (6 * 83) == null)
            //     || this.surfacesOfRooms[i] === Number(caseStartRoom.id) - 8 - (6 * 83)
            //     || document.getElementById(Number(caseStartRoom.id) - 8 - (6 * 83)) == null) 
            //     {
            //         console.log("Problem with others surfaces, need to create a new start of room");
            //         room--;
            //         break;
            //     } else {
            //         console.log("else, surface ok pour drawing !");
            //         this.drawRoom(caseStartRoom);
            //         break;
            //     }
            // }    
        }
    }
}

const rooms = new Rooms();

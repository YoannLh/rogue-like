
class Rooms {
    constructor() {
        this.width;
        this.height;
        this.totalCases = 2490;
        this.surfacesOfRoomsForSpawnObjects = [];
        this.surfacesForNoCollisionWithOthersRooms = [];
        this.roomsWithTheirSurfaces = [];
    }
    drawRoom(caseStartRoom) {
        console.log("ENTER IN DRAWING PHASE");
        let downWall;
        let rightWall;
        let leftWall;
        let upWall;
        //let checkIfAtLeastOneDoorExists;
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
            }
        }
        for(let i = 1; i <= 9; i++) {
            upWall = document.getElementById(Number(caseStartRoom.id) - (6 * 83) - i + 1);
            upWall.style.color = "white";
            upWall.innerHTML = "_";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(i == 5) {
                // Door systématiquement créée
                let doorOk = document.getElementById(Number(caseStartRoom.id) - (6 * 83) - i + 1);
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
            }
        }
        let xForNoCollisionWithOthersRooms = Number(leftWall.id) - 1 - 83;
        let tempForNoCollisionWithOthersRooms = xForNoCollisionWithOthersRooms;
        let yForNoCollisionWithOthersRooms = Number(caseStartRoom.id) + 1 + 83;
        let totalCasesForNoCollisionWithOthersRooms = 1;
        let countForNoCollisionWithOthersRooms = 1;
        for(let i = 1; i <= 11; i++) {
            this.surfacesForNoCollisionWithOthersRooms.push(xForNoCollisionWithOthersRooms);
            xForNoCollisionWithOthersRooms++;
            totalCasesForNoCollisionWithOthersRooms++;
            if(i == 11) {
                i = 0;
                xForNoCollisionWithOthersRooms = tempForNoCollisionWithOthersRooms + (countForNoCollisionWithOthersRooms * 83);
                countForNoCollisionWithOthersRooms++;
            }
            if(totalCasesForNoCollisionWithOthersRooms == 99) {
                i = 12;
            }
        }
        let xForSpawnObjects = Number(leftWall.id) + 1 + 83;
        console.log("x : " + xForSpawnObjects);
        let tempForSpawnObjects = xForSpawnObjects;
        let yForSpawnObjects = Number(caseStartRoom.id) - 83 - 1;
        console.log("y : " + yForSpawnObjects);
        let totalCasesForSpawnObjects = 1;
        let countForSpawnObjects = 1;
        for(let i = 1; i <= 7; i++) {
            this.surfacesOfRoomsForSpawnObjects.push(xForSpawnObjects);
            let pointForSpawnObject = document.getElementById(xForSpawnObjects);
            pointForSpawnObject.innerHTML = ".";
            pointForSpawnObject.style.color = "white";
            xForSpawnObjects++;
            totalCasesForSpawnObjects++;
            if(i == 7) {
                i = 0;
                xForSpawnObjects = tempForSpawnObjects + (countForSpawnObjects * 83);
                countForSpawnObjects++;
            }
            if(totalCasesForSpawnObjects == 36) {
                i = 7;
            }
        }
        console.log("ROOM CREEE !");
    }
    createRooms(sideOfScreen, numberOfRooms) {
        for(let room = 1; room <= numberOfRooms; room++) {
            let caseStartRoom = document.getElementById(Math.floor(Math.random() * (Math.floor(2490) - Math.ceil(499) + 1)) + Math.ceil(499));
            console.log("START : " + Number(caseStartRoom.id));
            for(let i = 0; i < 30; i++) {
                if((Number(caseStartRoom.id) >= (i * 83 + 1) && Number(caseStartRoom.id) <= (i * 83 + 1 + 8))) {
                    caseStartRoom = document.getElementById(Math.floor(Math.random() * (Math.floor(2490) - Math.ceil(499) + 1)) + Math.ceil(499));
                    console.log("NEW CASE START : " + Number(caseStartRoom.id));
                    i = -1;
                }
            }
            let rebuild = false;
            for(let i = 0; i <= this.surfacesForNoCollisionWithOthersRooms.length; i++) {
                if(this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id)
                || this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id) - 8 
                || this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id) - (6 * 83)
                || this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id) - 8 - (6 * 83)) {
                    console.log("this.surfacesForNoCollisionWithOthersRooms i : ", this.surfacesForNoCollisionWithOthersRooms[i]);
                    rebuild = true;  
                } 
            }
            if(!rebuild) {
                console.log("SURFACE OK POUR DRAWING !");
                this.drawRoom(caseStartRoom);    
            }
            if(rebuild) {
                console.log("this.surfacesForNoCollisionWithOthersRooms.length : " + this.surfacesForNoCollisionWithOthersRooms.length);
                console.log(Number(caseStartRoom.id));
                console.log(Number(caseStartRoom.id) - 8);
                console.log(Number(caseStartRoom.id) - (6 * 83));
                console.log(Number(caseStartRoom.id) - 8 - (6 * 83));   
                console.log("PROBLEM WITH OTHERS SURFACES, need to create a new start of room");
                rebuild = false;
                room--;   
            }      
        }
    }
}

const rooms = new Rooms();



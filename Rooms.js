
// TODO
// * Les portes doivent servir de points de collision au même titre que les angles (sinon les grandes salles "mangent" les petites)
// * Empecher les salles de se coller aux sides, sinon portes obsolètes

class Rooms {
    constructor() {
        this.totalCases = 2490;
        this.widthsHeightsAndLimitStartingPoint = [
            {"width" : 6, "height" : 6, "limitLeftStart" : 6, "limitUpStart" : (6 * 83 + 1)},
            {"width" : 8, "height" : 6, "limitLeftStart" : 8, "limitUpStart" : (6 * 83 + 1)}, 
            {"width" : 10, "height" : 6, "limitLeftStart" : 10, "limitUpStart" : (6 * 83 + 1)}, 
            {"width" : 8, "height" : 8, "limitLeftStart" : 8, "limitUpStart" : (8 * 83 + 1)},
            //{"width" : 12, "height" : 12, "limitLeftStart" : 12, "limitUpStart" : (12 * 83 + 1)},
            //{"width" : 4, "height" : 8, "limitLeftStart" : 4, "limitUpStart" : (8 * 83 + 1)}
        ];
        this.surfacesOfRoomsForSpawnObjects = [];
        this.surfacesForNoCollisionWithOthersRooms = [];
        this.roomsWithTheirSurfaces = [];
    }
    drawRoom(caseStartRoom, sizeRoom) {
        console.log("ENTER IN DRAWING PHASE");
        let downWall;
        let rightWall;
        let leftWall;
        let upWall;
        //let checkIfAtLeastOneDoorExists;
        caseStartRoom.style.color = "white";
        caseStartRoom.innerHTML = "_";
        //for(let i = 1; i < 9; i++) {
        for(let i = 1; i < sizeRoom.width + 1; i++) {
            downWall = document.getElementById(Number(caseStartRoom.id) - i);
            downWall.style.color = "white";
            downWall.innerHTML = "_";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(door != 0 && i == sizeRoom.width / 2) {
                let doorOk = document.getElementById(Number(caseStartRoom.id) - i);
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                let path = document.getElementById(Number(caseStartRoom.id) - i + 83);
                path.innerHTML = "#";
                path.style.color = "white";
            }
        }
        //for(let i = 1; i <= 6; i++) {
        for(let i = 1; i <= sizeRoom.height; i++) {
            rightWall = document.getElementById(Number(caseStartRoom.id) - (i * 83));
            rightWall.style.color = "white";
            rightWall.innerHTML = "|";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(door != 0 && i == sizeRoom.height / 2) {
                let doorOk = document.getElementById(Number(caseStartRoom.id) - (i * 83));
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                let path = document.getElementById(Number(caseStartRoom.id) - (i * 83) + 1);
                path.innerHTML = "#";
                path.style.color = "white";
            }
        }
        //for(let i = 1; i <= 6; i++) {
        for(let i = 1; i <= sizeRoom.height; i++) {
            leftWall = document.getElementById(Number(caseStartRoom.id) - sizeRoom.width - (i * 83));
            leftWall.style.color = "white";
            leftWall.innerHTML = "|";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            if(door != 0 && i == sizeRoom.height / 2) {
                let doorOk = document.getElementById(Number(caseStartRoom.id) - sizeRoom.width - (i * 83));
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                let path = document.getElementById(Number(caseStartRoom.id) - sizeRoom.width - (i * 83) - 1);
                path.innerHTML = "#";
                path.style.color = "white";
            }
        }
        //for(let i = 1; i <= 9; i++) {
        for(let i = 1; i <= sizeRoom.width + 1; i++) {
            upWall = document.getElementById(Number(caseStartRoom.id) - (sizeRoom.height * 83) - i + 1);
            upWall.style.color = "white";
            upWall.innerHTML = "_";
            let door = Math.floor(Math.random() * 2 - 1) + 1;
            //if(Math.ceil())
            if(i == sizeRoom.width / 2 + 1) {
                // Door systématiquement créée
                let doorOk = document.getElementById(Number(caseStartRoom.id) - (sizeRoom.height * 83) - i + 1);
                doorOk.innerHTML = "+";
                doorOk.style.color = "yellow";
                let path = document.getElementById(Number(caseStartRoom.id) - (sizeRoom.height * 83) - i + 1 - 83);
                //console.log("path up : ", path.id);
                path.innerHTML = "#";
                path.style.color = "white";
            }
        }
        let xForNoCollisionWithOthersRooms = Number(leftWall.id) - 1 - 83;
        let tempForNoCollisionWithOthersRooms = xForNoCollisionWithOthersRooms;
        let yForNoCollisionWithOthersRooms = Number(caseStartRoom.id) + 1 + 83;
        let totalCasesForNoCollisionWithOthersRooms = 1;
        let countForNoCollisionWithOthersRooms = 1;
        for(let i = 1; i <= sizeRoom.width + 3; i++) {
            this.surfacesForNoCollisionWithOthersRooms.push(xForNoCollisionWithOthersRooms);
            xForNoCollisionWithOthersRooms++;
            totalCasesForNoCollisionWithOthersRooms++;
            if(i == sizeRoom.width + 3) {
                i = 0;
                xForNoCollisionWithOthersRooms = tempForNoCollisionWithOthersRooms + (countForNoCollisionWithOthersRooms * 83);
                countForNoCollisionWithOthersRooms++;
            }
            if(totalCasesForNoCollisionWithOthersRooms == (sizeRoom.width + 3) * (sizeRoom.height + 3)) {
                i = sizeRoom.width + 3 + 1;
            }
        }
        let xForSpawnObjects = Number(leftWall.id) + 1 + 83;
        console.log("x : " + xForSpawnObjects);
        let tempForSpawnObjects = xForSpawnObjects;
        let yForSpawnObjects = Number(caseStartRoom.id) - 83 - 1;
        console.log("y : " + yForSpawnObjects);
        let totalCasesForSpawnObjects = 1;
        let countForSpawnObjects = 1;
        for(let i = 1; i <= sizeRoom.width - 1; i++) {
            this.surfacesOfRoomsForSpawnObjects.push(xForSpawnObjects);
            let pointForSpawnObject = document.getElementById(xForSpawnObjects);
            pointForSpawnObject.innerHTML = ".";
            //pointForSpawnObject.style.color = "white";
            xForSpawnObjects++;
            totalCasesForSpawnObjects++;
            if(i == sizeRoom.width - 1) {
                i = 0;
                xForSpawnObjects = tempForSpawnObjects + (countForSpawnObjects * 83);
                countForSpawnObjects++;
            }
            if(totalCasesForSpawnObjects == (sizeRoom.width - 1) * (sizeRoom.height - 1) + 1) {
                i = sizeRoom.width - 1;
            }
        }
        console.log("ROOM CREEE !");
    }
    createRooms(sideOfScreen, numberOfRooms) {
        for(let room = 1; room <= numberOfRooms; room++) {
            let choiceOfSizeRoom = Math.floor(Math.random() * 4 - 1) + 1;
            let sizeRoom = this.widthsHeightsAndLimitStartingPoint[choiceOfSizeRoom];
            //console.log("SIZEROOM : ", sizeRoom);
            let caseStartRoom = document.getElementById(Math.floor(Math.random() * (Math.floor(this.totalCases) - Math.ceil(sizeRoom.limitUpStart) + 1)) + Math.ceil(sizeRoom.limitUpStart));
            console.log("START : " + Number(caseStartRoom.id));
            for(let i = 0; i < 30; i++) {
                if((Number(caseStartRoom.id) >= (i * 83 + 1) && Number(caseStartRoom.id) <= (i * 83 + 1 + sizeRoom.limitLeftStart))) {
                    caseStartRoom = document.getElementById(Math.floor(Math.random() * (Math.floor(this.totalCases) - Math.ceil(sizeRoom.limitUpStart) + 1)) + Math.ceil(sizeRoom.limitUpStart));
                    console.log("NEW CASE START : " + Number(caseStartRoom.id));
                    i = -1;
                }
            }
            let rebuild = false;
            for(let i = 0; i <= this.surfacesForNoCollisionWithOthersRooms.length; i++) {
                if(this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id)
                || this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id) - sizeRoom.width 
                || this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id) - (sizeRoom.height * 83)
                || this.surfacesForNoCollisionWithOthersRooms[i] == Number(caseStartRoom.id) - sizeRoom.width - (sizeRoom.height * 83)) {
                    console.log("this.surfacesForNoCollisionWithOthersRooms i : ", this.surfacesForNoCollisionWithOthersRooms[i]);
                    rebuild = true;  
                } 
            }
            if(!rebuild) {
                console.log("SURFACE OK POUR DRAWING !");
                this.drawRoom(caseStartRoom, sizeRoom);    
            }
            if(rebuild) {
                //console.log("this.surfacesForNoCollisionWithOthersRooms.length : " + this.surfacesForNoCollisionWithOthersRooms.length);
                console.log(Number(caseStartRoom.id));
                //console.log(Number(caseStartRoom.id) - sizeRoom.width);
                //console.log(Number(caseStartRoom.id) - (sizeRoom.height * 83));
                //console.log(Number(caseStartRoom.id) - sizeRoom.width - (sizeRoom.height * 83));   
                console.log("PROBLEM WITH OTHERS SURFACES, need to create a new start of room");
                rebuild = false;
                room--;   
            }      
        }
    }
}

const rooms = new Rooms();



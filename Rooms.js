
class Rooms {
    constructor() {
        this.width = 7;
        this.height = 12;
        this.surfaces = [];
    }
    drawRooms(numberOfRooms) {
        console.log("rooms : " + numberOfRooms);
        while(numberOfRooms >= 0) {
            let caseStartRoom = document.getElementById(Math.floor(Math.random() * 2320) + 85);
            caseStartRoom.style.background = "purple";
            caseStartRoom.innerHTML = "_";
            for(let i = 1; i < 8; i++) {
                let downWall = document.getElementById(caseStartRoom.id - i);
                downWall.style.background = "grey";
                downWall.innerHTML = "_";
                // if(downWall == ) {
                //     let i = 1;
                // }
            }
            for(let i = 1; i <= 5; i++) {
                let rightWall = document.getElementById(caseStartRoom.id - (i * 83));
                rightWall.style.background = "grey";
                rightWall.innerHTML = "|";
                // if() {
                //     let i = 1;
                // }
            }
            for(let i = 1; i <= 5; i++) {
                let leftWall = document.getElementById(caseStartRoom.id - 7 - (i * 83));
                leftWall.style.background = "grey";
                leftWall.innerHTML = "|";
                // if() {
                //     let i = 1;
                // }
            }
            for(let i = 1; i <= 8; i++) {
                let upWall = document.getElementById(caseStartRoom.id - (5 * 83) - i + 1);
                upWall.style.background = "grey";
                upWall.innerHTML = "_";
                // if() {
                //     let i = 1;
                // }
            }
            //for(let s = 0; s < ; s++) {
                const surface = 0;
                this.surfaces.push({ "surface" : surface });
                console.log(this.surfaces)
            //}
            numberOfRooms--;
            if(numberOfRooms == 0) {
                return;
            }
        }
    }
}

const rooms = new Rooms();
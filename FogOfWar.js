
class FogOfWar {
    constructor() {
        this.casesOfRooms = rooms.surfacesOfRoomsForSpawnObjects;
        this.casesOfRoads = roads.allRoads;
        this.allWalls = rooms.allWalls;
        this.allPaths = rooms.allPaths;
        //this.allCases = [];
        this.fog = [];
        this.alreadySeenCases = [];
    }
    render() {
        // for(const el of this.casesOfRoads) {
        //     document.getElementById(el).style.color = "grey";
        // }
        // for(const el of this.casesOfRooms) {
        //     document.getElementById(el).style.color = "grey";
        // }
        // for(const el of this.allWalls) {
        //     document.getElementById(el).style.color = "grey";
        // }
        // for(const el of this.allPaths) {
        //     document.getElementById(el).style.color = "grey";
        // }
        for(const el of this.alreadySeenCases) {
            document.getElementById(el).style.color = "grey";
        }
        for(let height = 3; height > -4; height--) {
            for(let length = 0; length <= 6; length++) {
                let pieceOfFog = document.getElementById(((Number(player.player.id) - 83 * height) - 3) + length);
                pieceOfFog.style.color = "white";
                this.fog.push(pieceOfFog.id);
                this.alreadySeenCases.push(pieceOfFog.id);
            }
        }     
    }
}

const fogOfWar = new FogOfWar();
fogOfWar.render();



// fogOfWar(direction) {
    //     console.log("fog");
    //     for(let i = 1; i <= 7; i++) {
    //         document.getElementById(Number(this.player.id) - 83 * i).style.color = "white";
    //         document.getElementById(Number(this.player.id) + 83 * i).style.color = "white";
    //         document.getElementById(Number(this.player.id) - 1 * i).style.color = "white";
    //         document.getElementById(Number(this.player.id) + 1 * i).style.color = "white";
    //     }
    //     if(direction == "up") {
    //         for(let i = 1; i <= 7; i++) {
    //             if(document.getElementById(Number(this.player.id) - 83 * i).innerHTML == "_") {
    //                 //document.getElementById(Number(this.player.id) - 83 * i - 83).style.color = "blue";
    //             } else {
    //                 //document.getElementById(Number(this.player.id) - 83 * i).style.color = "white";
    //             }
    //         }
    //     }
    //     if(direction == "down") {
    //         for(let i = 1; i <= 7; i++) {
    //             if(document.getElementById(Number(this.player.id) + 83 * i).innerHTML == "_") {
    //             } else {
    //                 //document.getElementById(Number(this.player.id) + 83 * i).style.color = "blue";
    //             }
    //         }       
    //     }
    //     if(direction == "left") {
    //         for(let i = 1; i <= 7; i++) {
    //             if(document.getElementById(Number(this.player.id) - 1 * i).innerHTML == "|") {
    //             } else {
    //                 //document.getElementById(Number(this.player.id) - 1 * i).style.color = "blue";
    //             }
    //         }   
    //     }
    //     if(direction == "right") {
    //         for(let i = 1; i <= 7; i++) {
    //             if(document.getElementById(Number(this.player.id) + 1 * i).innerHTML == "|") {
    //             } else {
    //                 //document.getElementById(Number(this.player.id) + 1 * i).style.color = "blue";
    //             }
    //         }   
    //     }
    //     // for(let i = 1; i <= 7; i++) {
    //     //     document.getElementById(Number(this.player.id) - 83 * i).style.color = "white";
    //     //     document.getElementById(Number(this.player.id) + 83 * i).style.color = "white";
    //     //     document.getElementById(Number(this.player.id) - 1 * i).style.color = "white";
    //     //     document.getElementById(Number(this.player.id) + 1 * i).style.color = "white";
    //     // }
    //     // document.getElementById(Number(this.player.id) - 83 * i - 83 - i).style.color = "white";
    //     // document.getElementById(Number(this.player.id) - 83 * i - 83 + i).style.color = "white";
    //     // document.getElementById(Number(this.player.id) + 83 * i + 83 + i).style.color = "white";
    //     // document.getElementById(Number(this.player.id) + 83 * i + 83 - i).style.color = "white";
    //     //document.getElementById(Number(this.player.id) - 1 * i - 1 - i).style.color = "white";
    //     //document.getElementById(Number(this.player.id) + 1 * i + 1 + i).style.color = "white"
    // }
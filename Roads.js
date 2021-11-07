
class Roads {
    constructor() {
        this.totalCases = 2490;
        this.allPaths = [];
        this.allRoads = [];
    }
    getAllPaths() {
        for(let i = 1; i <= this.totalCases; i++) {
            let path = document.getElementById(i);
            if(path.innerHTML == "#") {
                this.allPaths.push(path);
            }
        }
        console.log("this.allPaths : ", this.allPaths);
    }
    drawRoads() {
        //console.log("drawing roads");
        for(let i = 0; i < this.allPaths.length; i++) {
            //console.log("BOUCLE FOR i = " + i);
            let path1 = this.allPaths[i];
            //console.log("path1 : ", path1)
            let path2;
            if(i == this.allPaths.length - 1) {
                path2 = this.allPaths[i];
            } else {
                path2 = this.allPaths[i + 3];
            }
            //console.log("PATH 2 : ", path2)
            let yRoad;
            let xRoad;
            let yPath2;
            let xPath2;
            let road = document.getElementById(Number(path1.id));
            let left = false;
            let right = false;
            let up = false;
            let down = false;
            let pieceOfRoadForUp;
            for(let i = 0; i <= 30; i++) {
                if(path2.id >= i * 83 + 1 && path2.id <= i * 83 + 83) {
                    yPath2 = i;
                    xPath2 = path2.id - (i * 83 + 1);
                }
            }
            let directions = [-1, +1, -83, +83];
            //
            //road.style.background = "green";
            //
            //console.log("beginning road.id : " + road.id);
            //console.log("ypath2 : " + yPath2);
            //console.log("xpath2 : " + xPath2)
            while(road != path2) {
                for(let i = 0; i <= 30; i++) {
                    if(road.id >= i * 83 + 1 && road.id <= i * 83 + 83) {
                        yRoad = i;
                        xRoad = road.id - (i * 83 + 1);
                    }
                }
                //directions = [-1, +1, -83, +83];
                //directions[0] gauche
                //directions[1] droite
                //directions[2] haut
                //directions[3] bas
                if(xPath2 <= xRoad) {
                    road = document.getElementById(Number(road.id) + directions[0])
                    left = true;
                    right = false
                }
                if(xPath2 >= xRoad) {
                    road = document.getElementById(Number(road.id) + directions[1])
                    right = true
                    left = false
                }
                if(yPath2 <= yRoad) {
                    road = document.getElementById(Number(road.id) + directions[2])
                    up = true
                    down = false
                }
                if(yPath2 >= yRoad) {
                    road = document.getElementById(Number(road.id) + directions[3])
                    down = true
                    up = false
                    if(down && document.getElementById(Number(road.id) + directions[3]).innerHTML == "") {
                        pieceOfRoadForUp = document.getElementById(Number(road.id) - 83)
                        //pieceOfRoadForUp.style.background = "grey"
                        if(pieceOfRoadForUp.innerHTML == "_" 
                        || pieceOfRoadForUp.innerHTML == "+"
                        || pieceOfRoadForUp.innerHTML == "."
                        || pieceOfRoadForUp.innerHTML == "|") {
                            pieceOfRoadForUp.style.background = ""
                        }
                        if(pieceOfRoadForUp.innerHTML == "") {
                            pieceOfRoadForUp.style.zIndex = "-1"
                            //pieceOfRoadForUp.style.color = "grey"
                            pieceOfRoadForUp.innerHTML = "#"
                            //
                            this.allRoads.push(pieceOfRoadForUp.id);
                            //
                        }
                        down = false;
                    }
                }
                //road.style.background = "green"
                if(road.innerHTML == "") {
                    road.style.zIndex = "-1"
                    //road.style.color = "grey"
                    road.innerHTML = "#"
                    //
                    this.allRoads.push(road.id);
                    //
                }
                if(road.innerHTML == "."
                || road.innerHTML == "+") {
                    road.style.background = ""
                }
                if(road.innerHTML == "_") {
                    // trop gourmand... 
                    road.style.background = ""
                    if(left) {
                        road = document.getElementById(Number(road.id) + directions[2] - 83 + 1)
                    }
                    if(right) {
                        road = document.getElementById(Number(road.id) + directions[2] - 83 - 1)
                    }    
                }
                if(road.innerHTML == "|") {
                    //
                    //road.style.background = "red"
                    //
                    // if(up) {
                    //     road = document.getElementById(Number(road.id) + directions[2] + 83)
                    // }
                    //
                    //
                    //
                    // if(left && down) {
                    //     road = document.getElementById(Number(road.id) + directions[2] - 1)
                    // }
                    // if(right && down) {
                    //     road = document.getElementById(Number(road.id) + directions[2] + 1)
                    // }
                    //   
                    // 
                }
                if(board.sidesOfScreen.find(el => el == road.id)) {
                    //road.style.background = "purple";
                }
                if(road.id == path2.id) {
                    //console.log("PORTE TROUVEE")
                }
            } 
        }                        
    }
}

const roads = new Roads();
roads.getAllPaths();
roads.drawRoads();
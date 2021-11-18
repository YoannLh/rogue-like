//import Character from "./Character.js"

//class Foe extends Character {
class Foe {
    constructor() {
        this.foe;
        this.appearance = "O";
        this.color = "green";
        this.temp;
        this.life;
        this.strength;
        this.agility;
        this.endurance;
        this.intelligence;
        this.luck;
    }
    render() {
        let random = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length) + 1;
        let start = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[random]);
        this.temp = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[random]).innerHTML;
        console.log("start foe : ", start.id);
        this.foe = document.getElementById(start.id);
        this.foe.innerHTML = this.appearance;
        this.foe.style.color = "green";
    }
    move() {
        console.log("move foe");
        let randomGoal = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length) + 1;
        let goal = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[randomGoal]);
        let directions = [-83, +1, +83, -1];
        let randomDirection = Math.floor(Math.random() * 4 - 1) + 1;
        while(document.getElementById(Number(this.foe.id) + directions[randomDirection]).innerHTML == "_"
        || document.getElementById(Number(this.foe.id) + directions[randomDirection]).innerHTML == "|"
        || document.getElementById(Number(this.foe.id) + directions[randomDirection]).innerHTML == "") {
            randomDirection = Math.floor(Math.random() * 4 - 1) + 1;   
        }
        this.foe.innerHTML = this.temp;
        this.temp = document.getElementById(Number(this.foe.id) + directions[randomDirection]).innerHTML;
        this.foe = document.getElementById(Number(this.foe.id) + directions[randomDirection]);
        this.foe.innerHTML = this.appearance;
        this.foe.style.color = "green";    
    }
}

const foe = new Foe();
foe.render();
const foe2 = new Foe();
foe2.render();
const foe3 = new Foe();
foe3.render();
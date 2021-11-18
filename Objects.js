
class Objects {
    constructor() {
        this.entry
        this.exit
        this.potions
        this.scrolls
        this.chests
        this.weapons
        this.armors
        this.keys
        this.altars
        this.traps
        this.foods
        this.golds
        this.skeletons
        this.torchs
        this.plants
        this.mushrooms
        this.sources
        this.gems
        this.leafs // bestiaire à completer
        this.artefacts
        this.lava
        this.bags
        this.rings
        this.graffs //runes à déchiffrer, incantations, portes dérobées, énigmes
        this.grimoires
        this.instruments
    }
    render() {

    }
    drawEntry() {
        let randomCaseEntry = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length) + 1;
        this.entry = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[randomCaseEntry]);
        console.log("entry div : " + randomCaseEntry)
        this.entry.innerHTML = "<";
        if(fogOfWar.alreadySeenCases.find(el => el == this.entry.id)) {
            this.entry.style.color = "red";
        }
    }
    drawExit() {
        let randomCaseExit = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length) + 1;
        this.exit = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[randomCaseExit]);
        console.log("exit div : " + randomCaseExit)
        this.exit.innerHTML = ">";
        if(fogOfWar.alreadySeenCases.find(el => el == this.exit.id)) {
            this.exit.style.color = "red";
        }
    }
    drawPotion() {
        let randomPotion = Math.floor(Math.random() * rooms.surfacesOfRoomsForSpawnObjects.length) + 1;
        this.potion = document.getElementById(rooms.surfacesOfRoomsForSpawnObjects[randomPotion]);
        console.log("potion div : " + randomPotion)
        this.potion.innerHTML = "!";
        if(fogOfWar.alreadySeenCases.find(el => el == this.potion.id)) {
            this.potion.style.color = "yellow";
        }
    }
}

const objects = new Objects();
objects.render();
objects.drawEntry();
objects.drawExit();
objects.drawPotion();


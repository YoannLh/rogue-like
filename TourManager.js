
class TourManager {
    constructor() {
        this.pressedKey;
        //
        this.placesOfFoes = [];
    }
    spyKeyboard() {
        document.addEventListener("keydown", (e) => {
            this.pressedKey = e.key;
            console.log("tourmanager pressed key : " + e.key);
            //player.movePlayer();
            foe.move();
            foe2.move();
            foe3.move();
            this.spyPlacesOfMonsters();
            player.movePlayer();
        });
    }
    spyPlacesOfMonsters() {
        this.placesOfFoes = [];
        this.placesOfFoes.push(foe);
        this.placesOfFoes.push(foe2);
        this.placesOfFoes.push(foe3);
        console.log("places of foes in tour manager : ", this.placesOfFoes);
    }
}

const tourManager = new TourManager();
tourManager.spyKeyboard();
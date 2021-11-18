
class TourManager {
    constructor() {
        this.pressedKey;
    }
    spyKeyboard() {
        document.addEventListener("keydown", (e) => {
            this.pressedKey = e.key;
            console.log("tourmanager pressed key : " + e.key);
            player.movePlayer();
            foe.move();
            foe2.move();
            foe3.move();
        });
    }
}

const tourManager = new TourManager();
tourManager.spyKeyboard();
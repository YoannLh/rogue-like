
class Inventory {
    constructor() {
        this.inventory = [];
    }
    describeInventory() {
        console.log("Inventory : ", this.inventory); 
    }
}

const inventory = new Inventory();
inventory.describeInventory();
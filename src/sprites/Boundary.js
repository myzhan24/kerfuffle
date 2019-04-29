import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, asset, direction}) {
        // N E S W, 0 1 2 3
        super(scene, 0, 0, asset);
        this.setOrigin(0, 0);
        this.init(scene, direction);
        this.direction = direction;
    }

    init(scene, direction) {
        // Set x, y
        switch (direction) {
            case 0: // N
                this.y = 0;
                break;

            case 1: // E
                this.x = scene.sys.game.config.width - this.width;
                break;

            case 2: // S
                this.y = scene.sys.game.config.height - this.height;
                break;

            case 3: // W
                this.x = 0;
                break;
        }

        // Set Width or Height
        switch (direction) {
            case 0: // N
                this.displayWidth = scene.sys.game.config.width;
                break;

            case 1: // E
                this.displayHeight = scene.sys.game.config.height;
                break;

            case 2: // S
                this.displayWidth = scene.sys.game.config.width;
                break;

            case 3: // W
                this.displayHeight = scene.sys.game.config.height;
                break;
        }
    }
}

import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.setOrigin(0, 0);
        this.displayWidth = scene.sys.game.config.width;
        this.y = scene.sys.game.config.height - this.height;
    }
}

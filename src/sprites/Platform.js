import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.setOrigin(0, 0);
        this.setScale(20, 1);
        this.y = scene.sys.game.config.height - this.height;
    }
}

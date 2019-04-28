import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.vectorX = 0;
        this.vectorY = 0;
        this.accelX = 0;
        this.accelY = -0.4;
    }

    update() {
        this.vectorX += this.accelX;
        this.vectorY += this.accelY;
        this.x += this.vectorX;
        this.y -= this.vectorY;
    }
}

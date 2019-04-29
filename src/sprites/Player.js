import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.vectorX = 0;
        this.vectorY = 0;
        this.accelX = 0;
        this.accelY = -0.8;
    }

    update() {
        this.vectorX += this.accelX;
        this.vectorY += this.accelY;
        this.x += this.vectorX;
        this.y -= this.vectorY;
    }

    decayVectorX() {
        if (this.getVectorX() < 0) {
            this.setAccelX(1);
        } else if (this.getVectorX() > 0) {
            this.setAccelX(-1);
        }

        if (Math.abs(this.getVectorX()) <= 0.5) {
            this.setAccelX(0);
            this.setVectorX(0);
        }
        console.log('mz decay', this.getVectorX(), this.accelX);
    }

    /*decayVectorX() {
        this.setVectorX(this.getVectorX() / 1.05);
    }*/

    setVectorX(vector) {
        this.vectorX = vector;
    }

    getVectorX() {
        return this.vectorX;
    }

    adjustVectorX(value) {
        this.vectorX += value;
    }

    setVectorY(vector) {
        this.vectorY = vector;
    }

    setAccelX(vector) {
        this.accelX = vector;
    }

    setAccelY(vector) {
        this.accelY = vector;
    }
}

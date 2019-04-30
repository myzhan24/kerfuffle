import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset, universe}) {
        super(scene, x, y, asset);
        this.scene = scene;
        this.universe = universe;
        this.vectorX = 0;
        this.vectorY = 0;
        this.accelX = 0;
        this.accelY = 0;
        this.lastX = x;
        this.lastY = y;
    }

    ignoreInfluence() {
        return true;
    }

    updateVectorInfluences() {

    }

    updatePositionInfluences() {

    }

    adjustVectorX(val) {
        this.vectorX += val;
    }

    adjustVectorY(val) {
        this.vectorY += val;
    }

    setAccelX(val) {
        this.accelX = val;
    }

    setAccelY(val) {
        this.accelY = val;
    }
}

import Phaser from 'phaser'

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset}) {
        super(scene, x, y, asset);
        this.vectorX = 0;
        this.vectorY = 0;
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
}

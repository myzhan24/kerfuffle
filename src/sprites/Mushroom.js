import Phaser from 'phaser'
import {images} from '../../assets';

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, asset = images.mushroom}) {
        super(scene, x, y, asset)
    }

    update() {
        this.angle += 1
    }
}

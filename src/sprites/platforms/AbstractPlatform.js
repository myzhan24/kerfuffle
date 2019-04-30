import Phaser from 'phaser';
import { isPresent } from '../../utils';

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, w, h, asset}) {
        // N E S W, 0 1 2 3
        super(scene, x, y, asset);
        if (isPresent(w)) {
            this.displayWidth = w;
        }

        if (isPresent(h)) {
            this.displayHeight = h;
        }

        this.setOrigin(0, 0);
    }

    keepSpriteInBounds(sprite) {
        return false;
    }
}

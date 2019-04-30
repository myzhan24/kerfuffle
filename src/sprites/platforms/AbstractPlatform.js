import Phaser from 'phaser';
import { isPresent, overlaps } from '../../utils';

export default class extends Phaser.GameObjects.Sprite {
    constructor({scene, x, y, w, h, asset}) {
        super(scene, x, y, asset);
        if (isPresent(w)) {
            this.displayWidth = w;
        }

        if (isPresent(h)) {
            this.displayHeight = h;
        }

        this.setOrigin(0, 0);
    }

    /**
     * Returns true if triggered
     * @param sprite
     * @returns {boolean}
     */
    keepSpriteInBounds(sprite) {
        return false;
    }

    /**
     * Whether this platform is considered below a center-origin sprite
     * @param sprite
     * @returns {boolean}
     */
    isBelow(sprite) {
        let lowest = sprite.y + sprite.displayHeight / 8; // 8 instead of 2 for more forgiving tolerance.
        return lowest < this.y;
    }

    shouldInfluence(sprite) {
        return overlaps(this, sprite);
    }

    /**
     * By default does not halt input
     * @returns {boolean}
     */
    haltsMovement() {
        return false;
    }
}
